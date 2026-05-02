import { Body, Controller, Post, Res } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import type { Response } from "express";
import { Message } from "../../common/model/message.model";
import { LoginRequest } from "./auth.model";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  @ApiOperation({ summary: "Login a user" })
  async login(@Body() request: LoginRequest, @Res({ passthrough: true }) res: Response): Promise<Message> {
    const { token } = await this.authService.login(request.username, request.password);
    res.cookie("token", token, { httpOnly: true, secure: false, sameSite: "lax" });
    return { message: "Login successful" };
  }

  @Post("/logout")
  @ApiOperation({ summary: "Logout a user" })
  async logout(@Res({ passthrough: true }) res: Response): Promise<Message> {
    res.clearCookie("token");
    return { message: "Logout successful" };
  }
}
