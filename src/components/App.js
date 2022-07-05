import React, {useEffect, useState} from "react";
import { Route, Switch } from "react-router-dom";
import MainContainer from "./MainContainer";
import NavBar from "./NavBar";
import FavoriteContainer from "./FavoriteContainer";
import NewCardForm from "./NewCardForm";

function App() {
  const [baseballCards, setBaseballCards] = useState([])
  const [favCards, setFavCards] = useState([])
  const [isFavorite, setIsFavorite] = useState(false)

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
    checkFavorite()
  }

  function removeFavorite(cardToRemove) {
    const formerFavorties = favCards.filter((card) => card.id !== cardToRemove.id)
    setFavCards(formerFavorties)
    checkFavorite()
  }

  function checkFavorite() {
    if (favCards.length > 0) {
      setIsFavorite(false)
    }
    else setIsFavorite(true)
  }

  function addCard(newCard) {
    const updatedCards = [newCard, ...baseballCards]
    setBaseballCards(updatedCards)
  }

  return (
    <div className="App">
      <h1 className="header">Baseball Card Binder</h1>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <MainContainer baseballCards={baseballCards} addCard={addCard} onFavoriteClick={onFavoriteClick}/>
        </Route>
        <Route path="/Favorites">
          <FavoriteContainer favCards={favCards} removeFavorite={removeFavorite} isFavorite={isFavorite}/>
        </Route>
        <Route path="/AddCard">
          <NewCardForm addCard={addCard} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
