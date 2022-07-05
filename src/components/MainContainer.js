import React from "react";
import Cards from "./Cards"

function MainContainer({baseballCards, onFavoriteClick}) {
  const info = baseballCards.map((card) => <Cards key={card.id} card={card} onFavoriteClick={onFavoriteClick}/>)

    return (
        <div>
          <ul>{info}</ul>
        </div>
    )
}

export default MainContainer
