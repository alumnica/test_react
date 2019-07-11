import { combineReducers } from "redux";
import longQuestionReducer from "./longQuestionReducer";
import shortQuestionReducer from "./shortQuestionReducer";
import statusReducer from "./statusReducer";

export default combineReducers({
  longQuestion: longQuestionReducer,
  shortQuestion: shortQuestionReducer,
  status: statusReducer
});
