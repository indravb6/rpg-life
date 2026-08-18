import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, Length } from "class-validator";

export class CreateUserRequest {
  @IsNotEmpty()
  @Length(3, 50)
  @ApiProperty({ example: "andi" })
  username: string;

  @IsNotEmpty()
  @Length(8, 64)
  @ApiProperty({ example: "password123" })
  password: string;

  @IsEmail()
  @ApiProperty({ example: "andi@gmail.com" })
  email: string;
}

export class UserInfoResponse {
  username: string;
  email: string;
  currentStreak: number;
  level: number;
  exp: number;
  maxExp: number;
  strengthPoint: number;
  culturePoint: number;
  environmentPoint: number;
  charismaPoint: number;
  talentPoint: number;
  intellectPoint: number;
}

export class CredentialResponse {
  token: string;
}
