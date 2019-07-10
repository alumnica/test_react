import { combineReducers } from "redux";
import longQuestionReducer from "./longQuestionReducer";
import shortQuestionReducer from "./shortQuestionReducer";

export default combineReducers({
  longQuestion: longQuestionReducer,
  shortQuestion: shortQuestionReducer
});
