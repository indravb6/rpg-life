import { createParamDecorator, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";
import jwt from "jsonwebtoken";
import { Auth } from "./model/auth.model";

const getUserFromRequest = (req: Request): Auth => {
  let verifiedUser: Auth;
  const JWT_KEY = process.env.JWT_SECRET_KEY!;

  try {
    const token = req.cookies?.access_token;
    verifiedUser = jwt.verify(token, JWT_KEY) as Auth;
  } catch (error) {
    throw new UnauthorizedException("Invalid Session");
  }

  return verifiedUser;
};

export const Authorization = createParamDecorator((_, req) => {
  return getUserFromRequest(req.switchToHttp().getRequest());
});

export function generateJWT(username: string): string {
  const JWT_KEY = process.env.JWT_SECRET_KEY!;
  const credential = { username };
  return jwt.sign(credential, JWT_KEY);
}
