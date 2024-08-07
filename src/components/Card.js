import React from "react";

const Card = ({ text, top }) => {
  let containerStyles = {
    top: top,
  };

  return (
    <div className="cardContainer" style={containerStyles}>
      <div className="card">
        <h1>{text}</h1>
      </div>
    </div>
  );
};

export default Card;
