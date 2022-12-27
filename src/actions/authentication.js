import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../constants/authentication";

const loginAction = (credential) => {
  return {
    type: LOGIN,
    credential,
  };
};

const loginSuccessAction = (tokenDto) => {
  return {
    type: LOGIN_SUCCESS,
    tokenDto,
  };
};

const loginFailedAction = (error) => {
  return {
    type: LOGIN_FAILED,
    error,
  };
};

const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};

export { loginAction, loginSuccessAction, loginFailedAction, logoutAction };
