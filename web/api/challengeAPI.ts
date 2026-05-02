import { Category, Challenge } from "../types/challenge";
import { getRequest } from "./baseAPI";

const challengeAPI = {
  getCategories: async (cookieHeader?: string): Promise<Category[]> => {
    return getRequest("/challenges/categories", { Cookie: cookieHeader });
  },
  getChallenges: async (categoryTitle: string, cookieHeader?: string): Promise<Challenge[]> => {
    return getRequest(`/challenges?category=${categoryTitle}`, { Cookie: cookieHeader });
  },
};

export default challengeAPI;
