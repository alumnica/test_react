import {
  SQ_FETCH_SET,
  SQ_UPDATE_PAIR_SELECTED_CARD,
  SQ_TOGGLE_CURRENT_PAIR
} from "../../actions/types";

const INITIAL_STATE = {
  1: {
    pair_id: 1,
    selected_card: null,
    current_pair: true,
    cards: {
      1: {
        text: "Asimilador",
        img_url: "https://via.placeholder.com/200x300/EF4C45?text=Explorar",
        card_id: 1,
        moment_type: "Asimilador"
      },
      2: {
        text: "Convergente",
        img_url: "https://via.placeholder.com/200x300/21364B?text=Aplicar",
        card_id: 2,
        moment_type: "Convergente"
      }
    }
  },
  2: {
    pair_id: 2,
    selected_card: null,
    current_pair: false,
    cards: {
      3: {
        text: "Asimilador",
        img_url: "https://via.placeholder.com/200x300/EF4C45?text=Explorar",
        card_id: 3,
        moment_type: "Asimilador"
      },
      4: {
        text: "Divergente",
        img_url: "https://via.placeholder.com/200x300/009097?text=Conectar",
        card_id: 4,
        moment_type: "Divergente"
      }
    }
  },
  3: {
    pair_id: 3,
    selected_card: null,
    current_pair: false,
    cards: {
      5: {
        text: "Asimilador",
        img_url: "https://via.placeholder.com/200x300/EF4C45?text=Explorar",
        card_id: 5,
        moment_type: "Asimilador"
      },
      6: {
        text: "Acomodador",
        img_url: "https://via.placeholder.com/200x300/42B7A4?text=Bailar",
        card_id: 6,
        moment_type: "Acomodador"
      }
    }
  },
  4: {
    pair_id: 4,
    selected_card: null,
    current_pair: false,
    cards: {
      7: {
        text: "Convergente",
        img_url: "https://via.placeholder.com/200x300/21364B?text=Aplicar",
        card_id: 7,
        moment_type: "Convergente"
      },
      8: {
        text: "Divergente",
        img_url: "https://via.placeholder.com/200x300/009097?text=Conectar",
        card_id: 8,
        moment_type: "Divergente"
      }
    }
  },
  5: {
    pair_id: 5,
    selected_card: null,
    current_pair: false,
    cards: {
      9: {
        text: "Convergente",
        img_url: "https://via.placeholder.com/200x300/21364B?text=Aplicar",
        card_id: 9,
        moment_type: "Convergente"
      },
      10: {
        text: "Acomodador",
        img_url: "https://via.placeholder.com/200x300/42B7A4?text=Bailar",
        card_id: 10,
        moment_type: "Acomodador"
      }
    }
  },
  6: {
    pair_id: 6,
    selected_card: null,
    current_pair: false,
    cards: {
      11: {
        text: "Divergente",
        img_url: "https://via.placeholder.com/200x300/009097?text=Conectar",
        card_id: 11,
        moment_type: "Divergente"
      },
      12: {
        text: "Acomodador",
        img_url: "https://via.placeholder.com/200x300/42B7A4?text=Bailar",
        card_id: 12,
        moment_type: "Acomodador"
      }
    }
  }
};

export default (state = {}, action) => {
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
    default:
      return state;
  }
};
