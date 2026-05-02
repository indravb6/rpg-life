export interface Category {
  id: string;
  title: string;
}

export interface Challenge {
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
