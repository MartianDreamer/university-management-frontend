import { combineReducers } from "redux";
import authenticateReducer from "./authentication";

const rootReducer = combineReducers({
  authenticate: authenticateReducer,
});

export default rootReducer;
