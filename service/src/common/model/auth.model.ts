import { IsInt, IsString } from "class-validator";

export class Auth {
  @IsInt()
  iat: number;

  @IsString()
  username: string;
}
