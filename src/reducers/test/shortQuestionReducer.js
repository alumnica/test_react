import {
  SQ_FETCH_SET,
  SQ_UPDATE_PAIR_SELECTED_CARD,
  SQ_TOGGLE_CURRENT_PAIR,
  SQ_SET_ACTIVE_PAIR_ID
} from "../../actions/types";

const INITIAL_STATE = {
  user: null,
  active_pair: 0,
  pares: {
    0: {
      id: 0,
      type_moment_selected: "",
      current_pair: false,
      options: {}
    }
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SQ_FETCH_SET:
      return action.payload;
    case SQ_TOGGLE_CURRENT_PAIR: {
      let updated_state = { ...state };
      updated_state.pares[action.payload].current_pair = !updated_state.pares[
        action.payload
      ].current_pair;
      return updated_state;
    }
    case SQ_UPDATE_PAIR_SELECTED_CARD: {
      let updated_state = { ...state };
      updated_state.pares[action.payload.pairID].type_moment_selected =
        action.payload.cardType;
      return updated_state;
    }
    case SQ_SET_ACTIVE_PAIR_ID: {
      return { ...state, active_pair_id: action.payload };
    }
    default:
      return state;
  }
};
