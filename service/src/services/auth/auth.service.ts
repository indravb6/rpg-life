import { Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Request } from "express";
import * as jwt from "jsonwebtoken";
import { Auth } from "../../common/model/auth.model";

@Injectable()
export class AuthService {
  constructor(private configService: ConfigService) {}

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
}
