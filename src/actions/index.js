import {
  FETCH_QUESTION,
  UPDATE_RESULT,
  POST_RESULT,
  DELETE_QUESTION,
  UPDATE_CHECK_OPTION_AND_RESULT
} from "./types";

export const updateCheckOption = option => {
  return {
    type: UPDATE_CHECK_OPTION_AND_RESULT,
    payload: option
  };
};
