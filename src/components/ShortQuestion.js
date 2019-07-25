import React, { useEffect } from "react";
import { connect } from "react-redux";

import Card from "./Card";
import { nextPair, lqFetchSet } from "../actions";

const ShortQuestion = props => {
  const fetchSet = props.lqFetchSet;
  const id = 1;
  //NOTA: por que fechea la pregunta test y no longquestion
  useEffect(
    () => {
      fetchSet(id);
    },
    [fetchSet, id]
  );

  const renderOptions = current_pair => {
    if (current_pair) {
      return Object.values(current_pair.cards).map(card => {
        return (
          <Card
            key={card.card_id}
            imgUrl={card.img_url}
            text={card.text}
            value={card.moment_type}
            onClick={() =>
              props.nextPair(props.current_pair.pair_id, card.card_id)
            }
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
        {renderOptions(props.current_pair)}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    question_set: state.test.shortQuestion,
    current_pair: Object.values(state.test.shortQuestion).filter(
      pair => pair.current_pair === true
    )[0]
  };
};

export default connect(
  mapStateToProps,
  { nextPair, lqFetchSet }
)(ShortQuestion);
