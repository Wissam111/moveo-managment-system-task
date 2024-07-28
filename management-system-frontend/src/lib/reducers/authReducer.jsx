import { AUTH_ACTION_TYPES } from "@/constants/actionTypes";
import { clearSession, getSession, saveSession } from "@/utils/session";

const { SIGNIN_SUCCESS, LOGOUT_SUCCESS } = AUTH_ACTION_TYPES;

const initialState = {
  user: getSession()?.user,
  session: getSession(),
  isAuthorized: getSession()?.token ? true : false,
  isLoading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      const { accessToken } = action.payload?.data;

      const session = { accessToken };
      saveSession(session);
      return {
        ...state,
        session,
        isAuthorized: true,
        isLoggedIn: true,
      };

    case LOGOUT_SUCCESS:
      clearSession();
      return {
        ...initialState,
        user: null,
        session: null,
        isAuthorized: false,
      };

    default:
      return state;
  }
};

export default authReducer;
