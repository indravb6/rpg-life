import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { InjectRepository } from "@nestjs/typeorm";
import bcrypt from "bcrypt";
import { Request } from "express";
import * as jwt from "jsonwebtoken";
import { Repository } from "typeorm";
import { Auth } from "../../common/model/auth.model";
import { User } from "../user/entities/user.entity";
import { CredentialResponse } from "../user/user.model";

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  getUserFromRequest(req: Request): Auth {
    try {
      const cookieName = "token";

      const token = req.cookies?.[cookieName];

      if (!token) {
        throw new UnauthorizedException("No token");
      }

      const secret = this.configService.get<string>("JWT_SECRET_KEY")!;

      return jwt.verify(token, secret) as Auth;
    } catch {
      throw new UnauthorizedException("Invalid Session");
    }
  }

  async login(username: string, password: string): Promise<CredentialResponse> {
    const user = await this.userRepository.findOne({
      select: ["username", "password"],
      where: { username },
    });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw new BadRequestException("Wrong username or password");
    }
    const credential: CredentialResponse = {
      token: this.generateJWT(user.username),
    };

    return credential;
  }

  private generateJWT(username: string): string {
    const JWT_KEY = this.configService.get<string>("JWT_SECRET_KEY")!;
    const credential = { username };
    return jwt.sign(credential, JWT_KEY);
  }
}
