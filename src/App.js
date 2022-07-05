import React, {useEffect, useState} from "react";
import MainContainer from "./MainContainer";
import NavBar from "./NavBar";
import FavoriteContainer from "./FavoriteContainer";

function App() {
  const [baseballCards, setBaseballCards] = useState([])
  const [favCards, setFavCards] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/baseballCards')
    .then(res => res.json())
    .then(data => {
      setBaseballCards(data)
    })
  }, [])

  function onFavoriteClick(favoriteCard) {
    const favoriteCards = favCards.find((card) => card.id === favoriteCard.id)
    if (!favoriteCards) {
      setFavCards([...favCards, favoriteCard])
    }
  }

  function removeFavorite(cardToRemove) {
    const formerFavorties = favCards.filter((card) => card.id !== cardToRemove.id)
    setFavCards(formerFavorties)
  }

  return (
    <div className="App">
      <h1 className="header">Baseball Card Binder</h1>
      <NavBar />
      <MainContainer baseballCards={baseballCards} onFavoriteClick={onFavoriteClick} />
      <FavoriteContainer favCards={favCards} removeFavorite={removeFavorite}/>
    </div>
  )
}

export default App;
