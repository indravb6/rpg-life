import { Body, Controller, Get, Post, Res, UseGuards } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import type { Response } from "express";
import { Auth } from "../../common/model/auth.model";
import { Message } from "../../common/model/message.model";
import { JwtAuthGuard, User } from "../auth/guard";
import { CreateUserRequest, LoginRequest, UserInfoResponse } from "./user.model";
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

  @Post("/login")
  @ApiOperation({ summary: "Login a user" })
  async login(@Body() request: LoginRequest, @Res({ passthrough: true }) res: Response): Promise<Message> {
    const { token } = await this.userService.login(request.username, request.password);
    res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "lax" });
    return { message: "Login successful" };
  }

  @Get("/info")
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Get user information" })
  async getUserInfo(@User() { username }: Auth): Promise<UserInfoResponse> {
    return await this.userService.getUserInfo(username);
  }
}
