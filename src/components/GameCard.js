import React from "react";
import "./GameCard.css";

const GameCard = ({ title, gameArt, freeWith, stores, saleDate }) => {
  return (
    <div className="wholeGameCards">
      <img src={gameArt} alt="" className="GameImg" />
      <p>{title}</p>
      <div>
        <p>{freeWith}</p>
        <p>{stores}</p>
        <p>{saleDate}</p>
      </div>
    </div>
  );
};

export default GameCard;
