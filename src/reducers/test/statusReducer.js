import {
  STATUS_TOGGLE_LOADING,
  STATUS_TOGGLE_TEST,
  STATUS_TOGGLE_SHORTQUESTION,
  STATUS_TOGGLE_LONGQUESTION,
  STATUS_TOGGLE_RESULT
} from "../../actions/types";

const INITIAL_STATE = {
  isLoading: false,
  test: true,
  longQuestion: true,
  shortQuestion: false,
  result: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STATUS_TOGGLE_LOADING:
      return {};
    case STATUS_TOGGLE_TEST:
      return {};
    case STATUS_TOGGLE_SHORTQUESTION:
      return { ...state, shortQuestion: !state.shortQuestion };
    case STATUS_TOGGLE_LONGQUESTION:
      return { ...state, longQuestion: !state.longQuestion };
    case STATUS_TOGGLE_RESULT:
      return { ...state, result: !state.result };
    default:
      return state;
  }
};
