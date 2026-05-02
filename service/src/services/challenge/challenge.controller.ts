import { Controller, Get, Query, UseGuards } from "@nestjs/common";
import { ApiOperation } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../common/guard";
import { GetChallengesQueryParam } from "./challenge.model";
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
}
