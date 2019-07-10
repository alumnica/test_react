import {
  FETCH_SET,
  UPDATE_CURRENT_PAIR,
  TOGGLE_CURRENT_PAIR,
  UPDATE_SELECTED_CARD,
  UPDATE_PAIR_SELECTED_CARD,
  NEXT_PAIR
} from "../../actions/types";

const INITIAL_STATE = {
  isLoading: false,
  test: true,
  longQuestion: true,
  shortQuestion: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SET:
      return action.payload;
    case TOGGLE_CURRENT_PAIR:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          current_pair: !state[action.payload].current_pair
        }
      };
    case UPDATE_PAIR_SELECTED_CARD:
      return {
        ...state,
        [action.payload.pairID]: {
          ...state[action.payload.pairID],
          selected_card: action.payload.cardID
        }
      };
    default:
      return state;
  }
};
