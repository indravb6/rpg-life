import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import bcrypt from "bcrypt";
import { Repository } from "typeorm";
import { Profile } from "./entities/profile.entity";
import { User } from "./entities/user.entity";
import { CreateUserRequest, UserInfoResponse } from "./user.model";
import { ChallengeSubmission } from "../challenge/entities/challenge-submission.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Profile) private readonly profileRepository: Repository<Profile>,
    @InjectRepository(ChallengeSubmission) private readonly challengeSubmissionRepository: Repository<ChallengeSubmission>,
  ) {}

  async registerUser(request: CreateUserRequest): Promise<User> {
    const hashPassword = bcrypt.hashSync(request.password, 10);

    const newUser = this.userRepository.create({
      ...request,
      password: hashPassword,
    });

    const user = await this.userRepository.save(newUser);

    const newProfile = this.profileRepository.create({
      user: user,
      level: 1,
      exp: 0,
      strengthPoint: 0,
      culturePoint: 0,
      environmentPoint: 0,
      charismaPoint: 0,
      talentPoint: 0,
      intellectPoint: 0,
    });

    await this.profileRepository.save(newProfile);

    return user;
  }

  async getProfileByUsername(username: string): Promise<Profile> {
    const profile = await this.profileRepository.findOne({
      where: { user: { username } },
    });
    if (!profile) {
      throw new BadRequestException("Profile not found");
    }
    return profile;
  }
  
  private calculateCurrentStreak(
    submissions: ChallengeSubmission[],
  ): number {
    return 0;
  }

  async getUserInfo(username: string): Promise<UserInfoResponse> {
    const user = await this.userRepository.findOne({
      where: { username },
    });
    if (!user) {
      throw new BadRequestException("User not found");
    }
  const profile = await this.getProfileByUsername(username);

  const submissions = await this.challengeSubmissionRepository.find({
    where: {
      profile: {
        id: profile.id,
      },
    },
    order: {
      createdDate: "DESC",
    },
  });

  const currentStreak = this.calculateCurrentStreak(submissions);
    const userInfo: UserInfoResponse = {
      username: user.username,
      email: user.email,
      currentStreak: currentStreak,
      level: profile.level,
      exp: profile.exp,
      maxExp: profile.level * 100,
      strengthPoint: profile.strengthPoint,
      culturePoint: profile.culturePoint,
      environmentPoint: profile.environmentPoint,
      charismaPoint: profile.charismaPoint,
      talentPoint: profile.talentPoint,
      intellectPoint: profile.intellectPoint,
    };
    return userInfo;
  }
}
