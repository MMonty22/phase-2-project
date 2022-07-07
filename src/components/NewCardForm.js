import React, {useState} from "react";
import {useHistory} from "react-router-dom"

function NewCardForm({addCard, addFavoriteByCheck}) {
    const [playerName, setPlayerName] = useState("")
    const [image, setImage] = useState("")
    const [team, setTeam] = useState("")
    const [playerPos, setPlayerPos] = useState("")
    const history = useHistory();
    const [checked, setChecked] = useState(false)

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
        .then((data) => {
            addCard(data)
            if (checked) {
                addFavoriteByCheck(data)
            }
        })
        history.push("/")

    }

    function handleNameChange(event) {
        setPlayerName(event.target.value)
    }

    function handleImageChange(event) {
        setImage(event.target.value)
    }

    function handleTeamChange(event) {
        setTeam(event.target.value)
    }

    function handlePositionChange(event) {
        setPlayerPos(event.target.value)
    }

    function handleChange() {
        setChecked(!checked)
    }

    return (
        <div className="new-card-form">
            <h2 className="new-card">Add A Card</h2>
            <form onSubmit={handleSubmit}>
                <label>Player Name</label>
                <input type="text" name="name" placeholder="Players full name" value={playerName} onChange={handleNameChange}/>
                <label>Image URL</label>
                <input type="text" name="image" placeholder="Link to image" value={image} onChange={handleImageChange}/>
                <label>Team Name</label>
                <input type="text" name="team" placeholder="Ex: Chicago Cubs" value={team} onChange={handleTeamChange}/>
                <label>Player Position</label>
                <input type="text" name="position" placeholder="Ex: OF" value={playerPos} onChange={handlePositionChange}/>
                <button type="submit">Add Card</button>
                <label>Add to Favorites?</label>
                <input id="checkbox" type="checkbox" checked={checked} onChange={handleChange}></input>
            </form>
        </div>
    )
}

export default NewCardForm;
