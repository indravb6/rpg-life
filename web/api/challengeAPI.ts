import { Category, Challenge, ChallengeSubmissionRequest } from "../types/challenge";
import { getRequest, postRequest } from "./baseAPI";

const challengeAPI = {
  getCategories: async (cookieHeader?: string): Promise<Category[]> => {
    return getRequest("/challenges/categories", { Cookie: cookieHeader });
  },
  getChallenges: async (categoryTitle: string, cookieHeader?: string): Promise<Challenge[]> => {
    return getRequest(`/challenges?category=${categoryTitle}`, { Cookie: cookieHeader });
  },
  submitChallenge: async (challengeSubmissionRequest: ChallengeSubmissionRequest, cookieHeader?: string) => {
    return postRequest("/challenges/submissions", challengeSubmissionRequest, {
      Cookie: cookieHeader,
    });
  },
};

export default challengeAPI;
