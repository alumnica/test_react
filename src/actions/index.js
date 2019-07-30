import alumnica from "../apis/alumnica";

import {
  LQ_FETCH_QUESTION,
  LQ_UPDATE_RESULT,
  LQ_POST_RESULT,
  LQ_UPDATE_OPTION_SELECTED_ORDER,
  LQ_FILL_OUT_AFFINITIES,
  SQ_FETCH_SET,
  SQ_UPDATE_PAIR_SELECTED_CARD,
  SQ_TOGGLE_CURRENT_PAIR,
  STATUS_TOGGLE_LOADING,
  // STATUS_TOGGLE_TEST,
  STATUS_TOGGLE_SHORTQUESTION,
  STATUS_TOGGLE_LONGQUESTION,
  STATUS_TOGGLE_RESULT
} from "./types";

//LongQuestion Actions
export const lqFetchQuestion = userId => async dispatch => {
  try {
    const response = await alumnica.get(`/test-alumnica/colb/${userId}/`);
    response.data.result_helper = [];
    console.log(response.data);
    dispatch({
      type: LQ_FETCH_QUESTION,
      payload: response.data
    });
    await dispatch(toggleLoading());
    await dispatch(toggleLongQuestion());
  } catch (e) {
    console.log(e);
  }
};
export const lqPostResult = () => async (dispatch, getState) => {
  const response = await alumnica.put(
    "/test-alumnica/colb/1/",
    getState().test.longQuestion
  );
  console.log(response);
};

export const lqFillOutAffinities = () => async dispatch => {
  dispatch({
    type: LQ_FILL_OUT_AFFINITIES
  });
};

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

export const selectCardLongQuestion = id => async (dispatch, getState) => {
  await dispatch(updateResult(id));
  await dispatch(updateOptionSelecedOrder(id));

  if (getState().test.longQuestion.result_helper.length === 4) {
    await dispatch(lqFillOutAffinities());
    await dispatch(lqPostResult());
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

export const toggleLoading = () => {
  return {
    type: STATUS_TOGGLE_LOADING
  };
};

//ShortQuestion Actions
export const lqFetchSet = userId => async dispatch => {
  try {
    const response = await alumnica.get(
      `http://127.0.0.1:8000/test-alumnica/card/${userId}/`
    );
    console.log(response.data);
    //get key for first pair in set
    let first_pair_key = Object.keys(response.data.pares)[0];
    //Set first pair as current active pair
    response.data.pares[first_pair_key].current_pair = true;
    console.log(
      Object.values(response.data.pares).filter(
        pair => pair.current_pair === true
      )[0]
    );
    dispatch({
      type: SQ_FETCH_SET,
      payload: response.data
    });
  } catch (e) {
    console.log(e);
  }
};
export const nextPair = (currentPairID, cardType) => async (
  dispatch,
  getState
) => {
  await dispatch(updatePairSelectedCard(currentPairID, cardType));

  const pairs_not_selected = Object.values(
    getState().test.shortQuestion.pares
  ).filter(pair => pair.type_moment_selected === "");
  console.log(pairs_not_selected);
  await dispatch(toggleCurrentPair(currentPairID));
  if (pairs_not_selected.length > 0) {
    await dispatch(toggleCurrentPair(pairs_not_selected[0].id));
  } else {
    //postSet
    await dispatch(toggleShortQuestion());
    await dispatch(toggleResult());
  }
};

export const updatePairSelectedCard = (pairID, cardType) => async dispatch => {
  dispatch({
    type: SQ_UPDATE_PAIR_SELECTED_CARD,
    payload: { pairID, cardType }
  });
};

export const toggleCurrentPair = pairID => async dispatch => {
  // const response = await jsonPlaceholder.get("/posts");
  dispatch({
    type: SQ_TOGGLE_CURRENT_PAIR,
    payload: pairID
  });
};
