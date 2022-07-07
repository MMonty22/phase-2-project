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

  useEffect(() => {
    if (favCards.length > 0) {
      setIsFavorite(true)
    }
    else setIsFavorite(false)
  }, [isFavorite, favCards.length])

  function onFavoriteClick(favoriteCard) {
    setFavCards([...favCards, favoriteCard])
  }

  function removeFavorite(cardToRemove) {
    const formerFavorties = favCards.filter((card) => card.id !== cardToRemove.id)
    setFavCards(formerFavorties)
  }

  function addCard(newCard) {
    const updatedCards = [newCard, ...baseballCards]
    setBaseballCards(updatedCards)
  }

  function addFavoriteByCheck(checkedCard) {
    setFavCards([...favCards, checkedCard])
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
          <NewCardForm addCard={addCard} addFavoriteByCheck={addFavoriteByCheck} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
