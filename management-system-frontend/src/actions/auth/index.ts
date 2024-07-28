// @ts-nocheck

import useFetch from "@/hooks/useFetch";
import { AUTH_ACTION_TYPES } from "@/constants/actionTypes";
import authRepository from "@/repository/auth-repository";
import useToast from "@/hooks/useToast";
import { ToastType } from "@/utils/Enums";

const { SIGNIN_SUCCESS, LOGOUT_SUCCESS } = AUTH_ACTION_TYPES;
const AuthActions = () => {
  const { handleApiResponse } = useFetch();
  const { showToast } = useToast();

  const signin = async ({ email, password }) => {
    try {
      const data = await authRepository.signin({ email, password });
      showToast(ToastType.SUCCESS, data?.message);
      return data?.response;
    } catch (e) {
      const message = e?.data?.error.message;
      showToast(ToastType.ERROR, message);
    }
  };

  const onSignSuccess = ({ data }) => {
    return async (dispatch) => {
      dispatch({
        type: SIGNIN_SUCCESS,
        payload: { data },
      });
    };
  };

  const logout = () => {
    return async (dispatch) => {
      try {
        dispatch({
          type: LOGOUT_SUCCESS,
        });
      } catch (e) {
        console.log(e);
      }
    };
  };

  return {
    signin,
    onSignSuccess,
    logout,
  };
};

export default AuthActions;
