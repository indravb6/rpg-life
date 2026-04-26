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

  @IsNotEmpty()
  @Length(3, 50)
  @ApiProperty({ example: "Andi" })
  fullName: string;
}

export class LoginRequest {
  @IsNotEmpty()
  @ApiProperty({ example: "andi" })
  username: string;

  @IsNotEmpty()
  @ApiProperty({ example: "password123" })
  password: string;
}

export class UserInfoResponse {
  username: string;
  email: string;
  fullName: string;
}

export class CredentialResponse {
  token: string;
}
