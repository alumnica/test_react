import React, { useEffect } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { selectCardLongQuestion, lqFetchQuestion } from "../actions";

const LongQuestion = props => {
  const fetchLongQuestion = props.lqFetchQuestion;
  const id = 1;

  useEffect(
    () => {
      fetchLongQuestion(id);
    },
    [fetchLongQuestion, id]
  );

  const extraContent = position => {
    if (position !== null) {
      return (
        <>
          <span className="right floated">{position + 1}</span>
          <span>
            <i className="thumbs up outline icon" />
          </span>
        </>
      );
    } else {
      return null;
    }
  };

  const getBorderColor = order => {
    switch (order) {
      case 0:
        return "red";
      case 1:
        return "blue";
      case 2:
        return "green";
      case 3:
        return "yellow";
      default:
        return null;
    }
  };

  const borderStyle = order => {
    if (order !== null) {
      let color = getBorderColor(order);
      return { border: "solid", color: color };
    }
    return null;
  };

  const renderCards = options => {
    return options.map(({ card_id, img_url, text, selected_order }) => {
      return (
        <Card
          key={card_id}
          imgUrl={img_url}
          text={text}
          cardStyle={borderStyle(selected_order)}
          extraContent={extraContent(selected_order)}
          onClick={() => props.selectCardLongQuestion(card_id)}
        />
      );
    });
  };

  return (
    <>
      {console.log(props.longQuestion)}
      <h2 className="header">{props.longQuestion.question}</h2>
      <div className="ui link two stackable cards">
        {renderCards(Object.values(props.longQuestion.options))}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    longQuestion: state.test.longQuestion
  };
};

export default connect(
  mapStateToProps,
  { selectCardLongQuestion, lqFetchQuestion }
)(LongQuestion);
