import { LOGIN, LOGOUT } from "../constants/authentication";
const initState = {
  demo: "hello world",
  tokenDto: null,
};

const authenticateReducer = (state = initState, action) => {
  if (action.type === LOGIN) {
    return {
      ...state,
      tokenDto: action.tokenDto,
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
