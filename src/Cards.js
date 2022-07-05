import React, {useState} from "react";

function CardList({card, onFavoriteClick}) {
  const [isActive, setIsActive] = useState(false)

  const {player, team, image, position} = card

  function handleClick() {
    setIsActive(!isActive)
    onFavoriteClick(card)
  }

  return (
    <div className="card">
      <h3>{player}</h3>
      <img src={image} alt={player}/>
      <h4>{team}</h4>
      <p>{position}</p>
      <button onClick={handleClick}>{isActive ? "❤️ Favorite" : "🤍 Favorite"}</button>
    </div>
  )
}

export default CardList