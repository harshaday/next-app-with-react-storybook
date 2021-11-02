import { combineReducers } from "redux";
import counterReducer, { postReducer } from "./reducer";

const rootReducer = combineReducers({
  posts: postReducer,
});

export default rootReducer;
