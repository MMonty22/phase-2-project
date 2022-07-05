import React from "react";

function FavoriteList({card}) {
    const {player, team, image, position} = card

    return (
        <div className="card">
            <h3>{player}</h3>
            <img src={image} alt={player}/>
            <h4>{team}</h4>
            <p>{position}</p>
            <button></button>
        </div>
    )
}

export default FavoriteList
