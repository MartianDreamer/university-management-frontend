import { LOGIN, LOGIN_SUCCESS, LOGOUT } from "../constants/authentication";

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

const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};

export { loginAction, loginSuccessAction, logoutAction };
