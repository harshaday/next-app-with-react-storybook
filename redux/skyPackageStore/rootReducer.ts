import { combineReducers } from "redux";
import { skyPackageReducer } from "./reducer";

const rootReducer = combineReducers({
  skyPackages: skyPackageReducer,
});

export default rootReducer;
