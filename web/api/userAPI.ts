import { LoginRequest, RegisterRequest } from "../types/user";
import { getRequest, postRequest } from "./baseAPI";

const userAPI = {
  register: async (data: RegisterRequest) => {
    return postRequest("/users/register", data);
  },
  login: async (data: LoginRequest) => {
    await postRequest("/auth/login", data);
  },
  logout: async () => {
    await postRequest("/auth/logout", {});
  },
  getUserInfo: async () => {
    const userInfo = await getRequest("/users/info");
    return userInfo;
  },
};

export default userAPI;
