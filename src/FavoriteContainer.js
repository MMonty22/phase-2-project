import React from "react";
import Favorites from "./Favorites";

function FavoriteContainer({favCards, removeFavorite, isFavorite}) {
  const favoriteCards = favCards.map((card) => <Favorites key={card.id} card={card} removeFavorite={removeFavorite} />)
  
  return (
    <div>
      <h2 className="favHead">{isFavorite ? "Favorite Cards" : ""}</h2>
      <h1 className="isFavorite">{isFavorite ? "" : "Please Add Favorites"}</h1>
      <ul>{favoriteCards}</ul>
    </div>
  )
}

export default FavoriteContainer;
