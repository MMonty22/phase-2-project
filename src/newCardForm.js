import React, {useState} from "react";

function NewCardForm({addCard}) {
    const [playerName, setPlayerName] = useState("")
    const [image, setImage] = useState("")
    const [team, setTeam] = useState("")
    const [playerPos, setPlayerPos] = useState("")

    function handleSubmit(event) {
        event.preventDefault()
        const newCardObj = {
            player: playerName,
            image: image,
            team: team,
            position: playerPos
        }
        fetch('http://localhost:3000/baseballCards', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCardObj)
        })
        .then(res => res.json())
        .then((data) => addCard(data))
    }

  return (
    <div>
        <h2 className="new-card">Add A Card</h2>
        <form onSubmit={handleSubmit}>
            <label>Player Name</label>
            <input type="text" name="name" placeholder="Players full name" value={playerName} />
            <label>Image URL</label>
            <input type="text" name="image" placeholder="Link to image" value={image} />
            <label>Team Name</label>
            <input type="text" name="team" placeholder="Ex: Chicago Cubs" value={team} />
            <label>Player Position</label>
            <input type="text" name="position" placeholder="Ex: OF" value={playerPos} />
            <button type="submit">Add Card</button>
            </form>
    </div>
  )
}

export default NewCardForm;
