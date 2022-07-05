import React, {useState} from "react";

function NewCardForm() {
    const [playerName, setPlayerName] = useState("")
    const [image, setImage] = useState("")
    const [team, setTeam] = useState("")
    const [playerPos, setPlayerPos] = useState("")

  return (
    <div>
        <h2 className="new-card">Add A Card</h2>
        <form>
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
