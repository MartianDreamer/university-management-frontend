import {
  LOGIN,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../constants/authentication";
const initState = {
  demo: "hello world",
  tokenDto: null,
};

const authenticateReducer = (state = initState, action) => {
  if (action.type === LOGIN) {
    return {
      ...state,
    };
  } else if (action.type === LOGIN_SUCCESS) {
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
    return {
      ...state,
      tokenDto: null,
    };
  }
  return state;
};

export default authenticateReducer;
