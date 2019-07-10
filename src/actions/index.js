import {
  LQ_FETCH_QUESTION,
  LQ_UPDATE_RESULT,
  LQ_POST_RESULT,
  LQ_DELETE_QUESTION,
  LQ_UPDATE_CHECK_OPTION_AND_RESULT,
  SQ_FETCH_SET,
  SQ_UPDATE_PAIR_SELECTED_CARD,
  SQ_TOGGLE_CURRENT_PAIR
} from "./types";

export const updateCheckOption = option => {
  return {
    type: LQ_UPDATE_CHECK_OPTION_AND_RESULT,
    payload: option
  };
};

// export const fetchSet = () => async dispatch => {
//   const response = await jsonPlaceholder.get("/posts");
//TIENE QUE HACER TOGGLE CURRENT PAIR EN ALGUN SET
//   dispatch({
//     type: "FETCH_SET",
//     payload: response.data
//   });
// };

export const toggleCurrentPair = pairID => async dispatch => {
  // const response = await jsonPlaceholder.get("/posts");

  dispatch({
    type: SQ_TOGGLE_CURRENT_PAIR,
    payload: pairID
  });
};

export const updatePairSelectedCard = (pairID, cardID) => async dispatch => {
  dispatch({
    type: SQ_UPDATE_PAIR_SELECTED_CARD,
    payload: { pairID, cardID }
  });
};

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
  }
  await dispatch(toggleCurrentPair(currentPairID));
};
