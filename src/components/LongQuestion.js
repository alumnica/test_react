import React, { useEffect } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { clickCardLQ } from "../actions";

const LongQuestion = props => {
  const resultPosition = optionID => {
    return props.longQuestion.result.findIndex(id => id === optionID);
  };
  const extraContent = optionID => {
    const position = resultPosition(optionID);
    if (position >= 0) {
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

  const getBorderColor = optionID => {
    switch (resultPosition(optionID)) {
      case 0:
        return "red";
      case 1:
        return "blue";
      case 2:
        return "green";
      case 3:
        return "yellow";
    }
  };

  const borderStyle = optionID => {
    if (props.longQuestion.result.includes(optionID)) {
      let color = getBorderColor(optionID);
      return { border: "solid", color: color };
    }
    return null;
  };

  const renderCards = options => {
    return options.map(({ card_id, img_url, text }) => {
      return (
        <Card
          key={card_id}
          imgUrl={img_url}
          text={text}
          cardStyle={borderStyle(card_id)}
          extraContent={extraContent(card_id)}
          onClick={() => props.clickCardLQ(card_id)}
          // onClick={() => props.updateCheckOption(option.id)}
        />
      );
    });
  };

  return (
    <div className="ui container">
      <h2 className="header">{props.longQuestion.question}</h2>
      <div className="ui link cards">
        {renderCards(Object.values(props.longQuestion.options))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    longQuestion: state.test.longQuestion
  };
};

export default connect(
  mapStateToProps,
  { clickCardLQ }
)(LongQuestion);
