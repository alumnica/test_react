import {
  FETCH_QUESTION,
  UPDATE_RESULT,
  POST_RESULT,
  DELETE_QUESTION,
  UPDATE_CHECK_OPTION_AND_RESULT
} from "../actions/types";

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
    case FETCH_QUESTION:
      return { ...state, isSignedIn: true, userId: action.payload };
    case UPDATE_RESULT:
      return { ...state, isSignedIn: false, userId: null };
    case UPDATE_CHECK_OPTION_AND_RESULT:
      const previousResult = [...state.result];
      const optionChecked = action.payload.checked;
      let updatedResult;
      if (optionChecked) {
        updatedResult = previousResult.filter(id => id !== action.payload.id);
      } else {
        previousResult.push(action.payload.id);
        updatedResult = [...previousResult];
      }
      return {
        ...state,
        result: updatedResult,
        options: {
          ...state.options,
          [action.payload.id]: {
            ...state.options[action.payload.id],
            checked: !action.payload.checked
          }
        }
      };
    case POST_RESULT:
      return { ...state, isSignedIn: false, userId: null };
    case DELETE_QUESTION:
      return { INITIAL_STATE };
    default:
      return state;
  }
};
