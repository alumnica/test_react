import React from "react";

const Card = props => {
  const extraContent = extracontent => {
    if (extracontent) {
      return <div className="extra content">{extracontent}</div>;
    }
    return null;
  };
  return (
    <div
      onClick={props.onClick}
      style={props.cardStyle}
      value={props.value}
      className="ui fluid card"
    >
      <div className="image">
        <img alt={props.text} src={props.imgUrl} />
      </div>
      <div className="content">
        <div className="header">{props.text}</div>
      </div>
      {extraContent(props.extraContent)}
    </div>
  );
};

export default Card;
