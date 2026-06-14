import { Body, Controller, Get, Post, Query, UseGuards } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { Authorization, JwtAuthGuard } from "../../common/guard";
import { Auth } from "../../common/model/auth.model";
import { ChallengeSubmissionRequest, GetChallengesQueryParam } from "./challenge.model";
import { ChallengeService } from "./challenge.service";

@Controller("/challenges")
@UseGuards(JwtAuthGuard)
export class ChallengeController {
  constructor(private readonly challengeService: ChallengeService) {}

  @Get("/categories")
  @ApiOperation({ summary: "Get challenge categories" })
  async getCategories() {
    return await this.challengeService.getCategories();
  }

  @Get("/")
  @ApiOperation({ summary: "Get challenges" })
  async getChallenges(@Query() { category }: GetChallengesQueryParam) {
    return await this.challengeService.getChallenges(category);
  }

  @Post("/submissions")
  @ApiOperation({ summary: "Submit challenge" })
  async submitChallenge(
    @Authorization() { username }: Auth,
    @Body() challengeSubmissionRequest: ChallengeSubmissionRequest,
  ) {
    return await this.challengeService.submitChallenge(challengeSubmissionRequest, username);
  }
}
