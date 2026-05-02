import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CategoryResponse, ChallengeResponse } from "./challenge.model";
import { Category } from "./entities/category.entity";
import { Challenge } from "./entities/challenge.entity";

@Injectable()
export class ChallengeService {
  constructor(
    @InjectRepository(Challenge) private challengeRepository: Repository<Challenge>,
    @InjectRepository(Category) private categoryRepository: Repository<Category>,
  ) {}

  async getCategories(): Promise<CategoryResponse[]> {
    const categories = await this.categoryRepository.find();
    return categories.map(({ title, id }) => ({ title, id }));
  }

  async getChallenges(categoryTitle: string): Promise<ChallengeResponse[]> {
    const challenges = await this.challengeRepository.find({ where: { category: { title: categoryTitle } } });
    return challenges;
  }
}
