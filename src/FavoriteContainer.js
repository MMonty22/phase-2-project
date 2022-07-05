import React from "react";
import Favorites from "./Favorites";

function FavoriteContainer({favCards}) {
  const favoriteCards = favCards.map((card) => <Favorites key={card.id} card={card} />)
  
  return (
    <div>
      <h2 className="favHead">Favorite Cards</h2>
      <ul>{favoriteCards}</ul>
    </div>
  )
}

export default FavoriteContainer;
