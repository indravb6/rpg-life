export interface RegisterRequest {
  email: string;
  password: string;
  username: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface UserInfo {
  username: string;
  email: string;
  currentStreak: number;
  level: number;
  exp: number;
  maxExp: number;
  strengthPoint: number;
  culturePoint: number;
  environmentPoint: number;
  charismaPoint: number;
  talentPoint: number;
  intellectPoint: number;
}
