import React, { useEffect } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { updateCheckOption } from "../actions";

const LongQuestion = props => {
  const resultPosition = option => {
    return props.longQuestion.result.findIndex(id => id === option.id);
  };
  const extraContent = option => {
    const position = resultPosition(option);
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

  const getBorderColor = option => {
    switch (resultPosition(option)) {
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

  const borderStyle = option => {
    if (option.checked) {
      let color = getBorderColor(option);
      return { border: "solid", color: color };
    }
    return null;
  };

  const renderCards = options => {
    return options.map(option => {
      return (
        <Card
          key={option.id}
          imgUrl={option.img}
          text={option.text}
          value={option.value}
          checked={option.checked}
          cardStyle={borderStyle(option)}
          extraContent={extraContent(option)}
          position={resultPosition(option)}
          onClick={() => props.updateCheckOption(option)}
          // onClick={() => props.updateCheckOption(option.id)}
        />
      );
    });
  };
  const fullResults = result => {
    if (result.length === 4) {
      return <div>LLENO</div>;
    }
    return <div />;
  };

  return (
    <div className="ui container">
      <h2 className="header">{props.longQuestion.question}</h2>
      <div className="ui link cards">
        {renderCards(Object.values(props.longQuestion.options))}
      </div>
      {fullResults(props.longQuestion.result)}
    </div>
  );
};

const mapStateToProps = state => {
  return { longQuestion: state.test.longQuestion };
};

export default connect(
  mapStateToProps,
  { updateCheckOption }
)(LongQuestion);
