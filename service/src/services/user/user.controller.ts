import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

import { UserData } from "./user.model";
import { UserService } from "./user.service";

@ApiTags("User")
@Controller("/users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/")
  @ApiOperation({ summary: "Fetch users data" })
  async fetch(): Promise<UserData[]> {
    return this.userService.fetch();
  }
}
