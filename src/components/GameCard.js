import React from "react";
import "./GameCard.css";

const GameCard = ({ title, gameArt }) => {
  return (
    <div className="wholeGameCards">
      <img src={gameArt} alt="" className="GameImg" />
      <p>{title}</p>
    </div>
  );
};

export default GameCard;
