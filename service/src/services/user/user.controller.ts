import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { Authorization, JwtAuthGuard } from "../../common/guard";
import { Auth } from "../../common/model/auth.model";
import { Message } from "../../common/model/message.model";
import { CreateUserRequest, UserInfoResponse } from "./user.model";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("/register")
  @ApiOperation({ summary: "Register a new user" })
  async register(@Body() request: CreateUserRequest): Promise<Message> {
    await this.userService.registerUser(request);

    return new Message("User registered successfully");
  }

  @Get("/info")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Get user information" })
  async getUserInfo(@Authorization() { username }: Auth): Promise<UserInfoResponse> {
    return await this.userService.getUserInfo(username);
  }
}
