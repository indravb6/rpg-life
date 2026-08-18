import { Module } from "@nestjs/common";

import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "../auth/auth.module";
import { Profile } from "./entities/profile.entity";
import { User } from "./entities/user.entity";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { ChallengeSubmission } from "../challenge/entities/challenge-submission.entity";

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports: [TypeOrmModule.forFeature([User, Profile, ChallengeSubmission]), AuthModule],
})
export class UserModule {}
