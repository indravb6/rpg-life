import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserService } from "../user/user.service";
import { CategoryResponse, ChallengeResponse, ChallengeSubmissionRequest } from "./challenge.model";
import { Category } from "./entities/category.entity";
import { ChallengeSubmission } from "./entities/challenge-submission.entity";
import { Challenge } from "./entities/challenge.entity";

@Injectable()
export class ChallengeService {
  constructor(
    @InjectRepository(Challenge) private challengeRepository: Repository<Challenge>,
    @InjectRepository(Category) private categoryRepository: Repository<Category>,
    @InjectRepository(ChallengeSubmission) private challengeSubmissionRepository: Repository<ChallengeSubmission>,
    private userService: UserService,
  ) {}

  async getCategories(): Promise<CategoryResponse[]> {
    const categories = await this.categoryRepository.find();
    return categories.map(({ title, id }) => ({ title, id }));
  }

  async getChallenges(categoryTitle: string): Promise<ChallengeResponse[]> {
    const challenges = await this.challengeRepository.find({ where: { category: { title: categoryTitle } } });
    return challenges;
  }

  async getChallenge(challengeId: string): Promise<Challenge> {
    const challenge = await this.challengeRepository.findOneOrFail({ where: { id: challengeId } });
    if (!challenge) {
      throw new BadRequestException("Challenge not found");
    }
    return challenge;
  }

  async submitChallenge(
    challengeSubmissionRequest: ChallengeSubmissionRequest,
    username: string,
  ): Promise<ChallengeSubmission> {
    const profile = await this.userService.getProfileByUsername(username);
    const challenge = await this.getChallenge(challengeSubmissionRequest.challengeId);
    const challengeSubmission = this.challengeSubmissionRepository.create({
      challenge,
      profile,
      comment: challengeSubmissionRequest.comment,
    });
    return await this.challengeSubmissionRepository.save(challengeSubmission);
  }
}
