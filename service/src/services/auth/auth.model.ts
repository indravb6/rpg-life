import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class LoginRequest {
  @IsNotEmpty()
  @ApiProperty({ example: "andi" })
  username: string;

  @IsNotEmpty()
  @ApiProperty({ example: "password123" })
  password: string;
}
