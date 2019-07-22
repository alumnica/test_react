import {
  LQ_FETCH_QUESTION,
  LQ_UPDATE_RESULT,
  LQ_POST_RESULT,
  LQ_UPDATE_OPTION_SELECTED_ORDER
} from "../../actions/types";

const INITIAL_STATE = {
  question: "¿Pregunta pregunta pregunta pregunta pregunta pregunta?",
  result: [],
  options: {
    1: {
      card_id: 1,
      img_url: "https://via.placeholder.com/200x300/EF4C45?text=Explorar",
      text: "Explorar",
      selected_order: null
    },
    2: {
      card_id: 2,
      img_url: "https://via.placeholder.com/200x300/009097?text=Conectar",
      text: "Conectar",
      selected_order: null
    },
    3: {
      card_id: 3,
      img_url: "https://via.placeholder.com/200x300/21364B?text=Aplicar",
      text: "Aplicar",
      selected_order: null
    },
    4: {
      card_id: 4,
      img_url: "https://via.placeholder.com/200x300/42B7A4?text=Bailar",
      text: "Bailar",
      selected_order: null
    }
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LQ_FETCH_QUESTION:
      return action.payload;
    case LQ_UPDATE_RESULT:
      let result = [...state.result];
      if (result.includes(action.payload)) {
        result = result.filter(resultID => resultID !== action.payload);
      } else {
        result.push(action.payload);
      }
      return { ...state, result: result };
    case LQ_UPDATE_OPTION_SELECTED_ORDER:
      let currentResultsOrder = [...state.result];
      let index = currentResultsOrder.indexOf(action.payload);
      index = index >= 0 ? index : null;
      return {
        ...state,
        options: {
          ...state.options,
          [action.payload]: {
            ...state.options[action.payload],
            selected_order: index
          }
        }
      };
    case LQ_POST_RESULT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
