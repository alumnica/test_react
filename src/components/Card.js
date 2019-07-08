import React from "react";

const Card = props => {
  const extraContent = content => {
    if (content) {
      return <div className="extra content">{content}</div>;
    }
    return null;
  };
  return (
    <div
      onClick={props.onClick}
      style={props.cardStyle}
      value={props.value}
      className="card"
    >
      <div className="image">
        <img alt={props.text} src={props.img} />
      </div>
      <div className="content">
        <div className="header">{props.text}</div>
      </div>
      {extraContent(props.extraContent)}
    </div>
  );
};

export default Card;
