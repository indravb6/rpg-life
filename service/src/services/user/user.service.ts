import { Injectable } from "@nestjs/common";
import { UserData } from "./user.model";

@Injectable()
export class UserService {
  constructor() {}

  async fetch(): Promise<UserData[]> {
    return [{ name: "Alice" }, { name: "Bob" }];
  }
}
