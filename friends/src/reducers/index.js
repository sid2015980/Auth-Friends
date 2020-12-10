import { combineReducers } from "redux";
import { formReducer } from "./formReducer";

export const rootReducer = combineReducers({
  formReducer,
});