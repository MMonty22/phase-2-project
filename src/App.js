import React, {useEffect, useState} from "react";
import MainContainer from "./MainContainer";
import NavBar from "./NavBar";

function App() {
  const [baseballCards, setBaseballCards] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/baseballCards')
    .then(res => res.json())
    .then(data => {
      setBaseballCards(data)
    })
  }, [])

  return (
    <div className="App">
      <h1 className="header">Baseball Card Binder</h1>
      <NavBar />
      <MainContainer baseballCards={baseballCards} />
    </div>
  )
}

export default App;
