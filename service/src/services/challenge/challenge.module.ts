import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "../auth/auth.module";
import { ChallengeController } from "./challenge.controller";
import { ChallengeService } from "./challenge.service";
import { Category } from "./entities/category.entity";
import { ChallengeSubmission } from "./entities/challenge-submission.entity";
import { Challenge } from "./entities/challenge.entity";

@Module({
  controllers: [ChallengeController],
  providers: [ChallengeService],
  imports: [TypeOrmModule.forFeature([Category, Challenge, ChallengeSubmission]), AuthModule],
})
export class ChallengeModule {}
