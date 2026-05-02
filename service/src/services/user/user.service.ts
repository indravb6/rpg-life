import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import bcrypt from "bcrypt";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserRequest, UserInfoResponse } from "./user.model";

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async registerUser(request: CreateUserRequest): Promise<User> {
    const hashPassword = bcrypt.hashSync(request.password, 10);

    const newUser = this.userRepository.create({
      ...request,
      password: hashPassword,
    });

    return await this.userRepository.save(newUser);
  }

  async getUserInfo(username: string): Promise<UserInfoResponse> {
    const user = await this.userRepository.findOne({
      where: { username },
    });
    if (!user) {
      throw new BadRequestException("User not found");
    }
    const userInfo: UserInfoResponse = {
      username: user.username,
      email: user.email,
    };
    return userInfo;
  }
}
