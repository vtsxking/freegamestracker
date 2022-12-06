import React from "react";

const GameCard = ({title, gameArt}) => {
    return (
        <div>
            <img src={gameArt} alt=""/>
            <p>{title}</p>
        </div>
    );
}

export default GameCard;