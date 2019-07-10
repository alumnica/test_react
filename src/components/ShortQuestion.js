import React from "react";
import { connect } from "react-redux";

import Card from "./Card";
import { nextPair } from "../actions";

const ShortQuestion = props => {
  // const renderOptions = question_set => {
  //   const notUsedPairs = question_set.filter(
  //     pair => pair.selected_card === null
  //   );
  //   if (notUsedPairs.length === 0) {
  //     return <div>FIN</div>;
  //   } else {
  //     return Object.values(notUsedPairs[0].card_pair).map(card => {
  //       return (
  //         <Card
  //           key={card.card_id}
  //           imgUrl={card.img_url}
  //           text={card.text}
  //           value={card.moment_type}
  //           onClick={() => "nada"}
  //           // onClick={() => props.updateCheckOption(option.id)}
  //         />
  //       );
  //     });
  //   }
  // };
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
    <div className="ui container">
      <h2 className="ui header">¿Cuál te gusta más?</h2>
      <div className="ui link cards">{renderOptions(props.current_pair)}</div>
    </div>
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
  { nextPair }
)(ShortQuestion);
