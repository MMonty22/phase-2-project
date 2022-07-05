import React from "react";

function FavoriteList({card, removeFavorite}) {
    const {player, team, image, position} = card

    function handleClick() {
        removeFavorite(card)
    }
    
    return (
        <div className="card">
            <h3>{player}</h3>
            <img src={image} alt={player}/>
            <h4>{team}</h4>
            <p>{position}</p>
            <button onClick={handleClick}>Remove as Favorite</button>
        </div>
    )
}

export default FavoriteList
