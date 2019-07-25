import {
  LQ_FETCH_QUESTION,
  LQ_UPDATE_RESULT,
  LQ_POST_RESULT,
  LQ_UPDATE_OPTION_SELECTED_ORDER,
  LQ_FILL_OUT_AFFINITIES
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
//NOTA: LQ_UPDATE_OPTION_SELECTED_ORDER sobre podriamos saltarnos ese paso y hacer todo directo con el result_helper, tener cuidadado con lazy render
export default (state = {}, action) => {
  switch (action.type) {
    case LQ_FETCH_QUESTION:
      return action.payload;
    case LQ_UPDATE_RESULT:
      let result_helper = [...state.result_helper];
      if (result_helper.includes(action.payload)) {
        result_helper = result_helper.filter(
          resultID => resultID !== action.payload
        );
      } else {
        result_helper.push(action.payload);
      }
      return { ...state, result_helper: result_helper };
    case LQ_UPDATE_OPTION_SELECTED_ORDER: {
      let currentResultsOrder = [...state.result_helper];
      let updatedState = { ...state };
      for (let i = 0; i < currentResultsOrder.length; i++) {
        updatedState.question.options[
          currentResultsOrder[i]
        ].selected_order = i;
      }

      let index = currentResultsOrder.indexOf(action.payload);

      index = index >= 0 ? index : null;
      updatedState.question.options[action.payload].selected_order = index;
      return updatedState;
    }
    case LQ_POST_RESULT:
      return { ...state, isSignedIn: false, userId: null };
    case LQ_FILL_OUT_AFFINITIES: {
      let final_result = [...state.result_helper];
      let updatedState = { ...state };

      for (let i = 0; i < final_result.length; i++) {
        let affinity_type = `affi_${
          updatedState.question.options[final_result[i]].type_moment
        }`;
        updatedState[affinity_type] = i + 1;
      }

      return updatedState;
    }
    default:
      return state;
  }
};
