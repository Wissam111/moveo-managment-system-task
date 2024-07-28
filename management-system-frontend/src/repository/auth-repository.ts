// @ts-nocheck

import apiCall from "@/network/apiCall";
import { AUTH_URLS } from "@/network/api";
import { RequestMethod } from "@/utils/Enums";
const AuthRepository = () => {
  const signin = async ({ email, password }) => {
    const data = await apiCall({
      url: AUTH_URLS.Signin,
      method: RequestMethod.POST,
      body: {
        email,
        password,
      },
    });
    return data;
  };

  return {
    signin,
  };
};
const authRepository = AuthRepository();
export default authRepository;
