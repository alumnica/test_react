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

  const getCurrentPair = questionSet => {
    if (questionSet === undefined) {
      return false;
    } else {
      return Object.values(questionSet).filter(
        pair => pair.current_pair === true
      )[0];
    }
  };

  const renderOptions = questionSet => {
    const current_pair = getCurrentPair(questionSet);
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
        {renderOptions(props.question_set)}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    question_set: state.test.shortQuestion.pares
  };
};

export default connect(
  mapStateToProps,
  { nextPair, lqFetchSet }
)(ShortQuestion);
