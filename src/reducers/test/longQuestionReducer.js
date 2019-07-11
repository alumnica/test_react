import {
  LQ_FETCH_QUESTION,
  LQ_UPDATE_RESULT,
  LQ_POST_RESULT,
  LQ_DELETE_QUESTION,
  LQ_UPDATE_CHECK_OPTION
} from "../../actions/types";

const INITIAL_STATE = {
  question: "¿Pregunta pregunta pregunta pregunta pregunta pregunta?",
  result: [],
  options: {
    1: {
      id: 1,
      img: "https://via.placeholder.com/200x300/EF4C45?text=Explorar",
      text: "Explorar",
      value: "Explorar",
      checked: false
    },
    2: {
      id: 2,
      img: "https://via.placeholder.com/200x300/009097?text=Conectar",
      text: "Conectar",
      value: "Conectar",
      checked: false
    },
    3: {
      id: 3,
      img: "https://via.placeholder.com/200x300/21364B?text=Aplicar",
      text: "Aplicar",
      value: "Aplicar",
      checked: false
    },
    4: {
      id: 4,
      img: "https://via.placeholder.com/200x300/42B7A4?text=Bailar",
      text: "Bailar",
      value: "Bailar",
      checked: false
    }
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LQ_FETCH_QUESTION:
      return { ...state, isSignedIn: true, userId: action.payload };
    case LQ_UPDATE_RESULT:
      return { ...state, result: action.payload };
    case LQ_UPDATE_CHECK_OPTION:
      return {
        ...state,
        options: {
          ...state.options,
          [action.payload]: {
            ...state.options[action.payload],
            checked: !state.options[action.payload].checked
          }
        }
      };
    case LQ_POST_RESULT:
      return { ...state, isSignedIn: false, userId: null };
    case LQ_DELETE_QUESTION:
      return { INITIAL_STATE };
    default:
      return state;
  }
};
