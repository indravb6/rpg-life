import { IsString } from "class-validator";

export class CategoryResponse {
  id: string;
  title: string;
}

export class ChallengeResponse {
  id: string;
  title: string;
  exp: number;
  requiredLevel: number;
  strengthPoint: number | null;
  culturePoint: number | null;
  environmentPoint: number | null;
  charismaPoint: number | null;
  talentPoint: number | null;
  intellectPoint: number | null;
}

export class GetChallengesQueryParam {
  @IsString()
  category: string;
}
