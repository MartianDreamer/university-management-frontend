import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../constants/authentication";
const initState = (() => {
  let token = localStorage.getItem("token");
  if (token === undefined) {
    token = null;
  }
  return {
    tokenDto: JSON.parse(token),
    error: null,
  };
})();

const authenticateReducer = (state = initState, action) => {
  if (action.type === LOGIN) {
    return {
      ...state,
    };
  } else if (action.type === LOGIN_SUCCESS) {
    localStorage.setItem("token", JSON.stringify(action.tokenDto));
    return {
      ...state,
      tokenDto: action.tokenDto,
      error: null,
    };
  } else if (action.type === LOGIN_FAILED) {
    return {
      ...state,
      error: action.error,
    };
  } else if (action.type === LOGOUT) {
    localStorage.removeItem("token");
    return {
      ...state,
      tokenDto: null,
    };
  }
  return state;
};

export default authenticateReducer;
