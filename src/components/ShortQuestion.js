import React, { useEffect } from "react";
import { connect } from "react-redux";

import Card from "./Card";
import { nextPair, lqFetchSet } from "../actions";

const ShortQuestion = props => {
  let fetchSet = props.lqFetchSet;
  let id = 1;
  //NOTA: por que fechea la pregunta test y no longquestion
  useEffect(
    () => {
      fetchSet(id);
    },
    [fetchSet, id]
  );

  // const getCurrentPair = active_pair => {
  //   if (active_pair === undefined) {
  //     return false;
  //   } else {
  //     // return Object.values(questionSet).filter(
  //     //   pair => pair.current_pair === true
  //     // )[0];
  //     return;
  //   }
  // };

  const renderOptions = current_pair => {
    if (current_pair) {
      return Object.values(current_pair.options).map(option => {
        return (
          <Card
            key={option.id}
            imgUrl={option.img_url}
            text={option.text}
            onClick={() => props.nextPair(current_pair.id, option.type_moment)}
          />
        );
      });
    } else {
      return null;
    }
  };

  return (
    <>
      <h2 className="ui header">¿Cuál te gusta más?</h2>
      <div className="ui link two cards">
        {renderOptions(props.active_pair)}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    active_pair:
      state.test.shortQuestion.pares[state.test.shortQuestion.active_pair_id]
  };
};

export default connect(
  mapStateToProps,
  { nextPair, lqFetchSet }
)(ShortQuestion);
