import { Body, Controller, Post } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation } from "@nestjs/swagger";
import { Authorization } from "../../common/authorization";
import { Auth } from "../../common/model/auth.model";
import { Message } from "../../common/model/message.model";
import { CreateUserRequest, CredentialResponse, LoginRequest, UserInfoResponse } from "./user.model";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("/register")
  @ApiOperation({ summary: "Register a new user" })
  async register(@Body() request: CreateUserRequest): Promise<Message> {
    await this.userService.registerUser(request);

    return new Message("User registered successfully");
  }

  @Post("/login")
  @ApiOperation({ summary: "Login a user" })
  async login(@Body() request: LoginRequest): Promise<CredentialResponse> {
    return await this.userService.login(request.username, request.password);
  }

  @Post("/info")
  @ApiOperation({ summary: "Get user information" })
  @ApiBearerAuth()
  async getUserInfo(@Authorization() { username }: Auth): Promise<UserInfoResponse> {
    return await this.userService.getUserInfo(username);
  }
}
