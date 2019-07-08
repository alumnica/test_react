import { combineReducers } from "redux";
import longQuestionReducer from "./longQuestionReducer";

export default combineReducers({
  longQuestion: longQuestionReducer
});
