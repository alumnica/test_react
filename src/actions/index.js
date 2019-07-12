import {
  // LQ_FETCH_QUESTION,
  LQ_UPDATE_RESULT,
  // LQ_POST_RESULT,
  LQ_UPDATE_OPTION_SELECTED_ORDER,
  // SQ_FETCH_SET,
  SQ_UPDATE_PAIR_SELECTED_CARD,
  SQ_TOGGLE_CURRENT_PAIR,
  // STATUS_TOGGLE_LOADING,
  // STATUS_TOGGLE_TEST,
  STATUS_TOGGLE_SHORTQUESTION,
  STATUS_TOGGLE_LONGQUESTION,
  STATUS_TOGGLE_RESULT
} from "./types";

// export const updateCheckOption = id => {
//   return {
//     type: LQ_TOGGLE_CHECKED_OPTION,
//     payload: id
//   };
// };

export const updateResult = id => {
  return {
    type: LQ_UPDATE_RESULT,
    payload: id
  };
};

export const updateOptionSelecedOrder = id => {
  return {
    type: LQ_UPDATE_OPTION_SELECTED_ORDER,
    payload: id
  };
};

export const clickCardLQ = id => async (dispatch, getState) => {
  await dispatch(updateResult(id));
  await dispatch(updateOptionSelecedOrder(id));

  if (getState().test.longQuestion.result.length === 4) {
    await dispatch(toggleLongQuestion());
    await dispatch(toggleShortQuestion());
  }
};

//Status Actions
export const toggleShortQuestion = () => {
  return {
    type: STATUS_TOGGLE_SHORTQUESTION
  };
};

export const toggleLongQuestion = () => {
  return {
    type: STATUS_TOGGLE_LONGQUESTION
  };
};

export const toggleResult = () => {
  return {
    type: STATUS_TOGGLE_RESULT
  };
};

//ShortQuestion Actions
export const nextPair = (currentPairID, cardID) => async (
  dispatch,
  getState
) => {
  await dispatch(updatePairSelectedCard(currentPairID, cardID));

  const pair = Object.values(getState().test.shortQuestion).filter(
    pair => pair.selected_card === null
  );
  if (pair.length > 0) {
    await dispatch(toggleCurrentPair(pair[0].pair_id));
  } else {
    //postSet
    await dispatch(toggleShortQuestion());
    await dispatch(toggleResult());
  }
  await dispatch(toggleCurrentPair(currentPairID));
};

export const updatePairSelectedCard = (pairID, cardID) => async dispatch => {
  dispatch({
    type: SQ_UPDATE_PAIR_SELECTED_CARD,
    payload: { pairID, cardID }
  });
};

export const toggleCurrentPair = pairID => async dispatch => {
  // const response = await jsonPlaceholder.get("/posts");
  dispatch({
    type: SQ_TOGGLE_CURRENT_PAIR,
    payload: pairID
  });
};
