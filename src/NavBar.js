import React from "react";
import { NavLink} from "react-router-dom"

function NavBar() {
    return (
        <nav className="nav">
            <NavLink className="cardLink" to="/" >
                Cards
            </NavLink>
            <NavLink className="favLink" to="/Favorites" >
                Favorites
            </NavLink>
            <NavLink className="formLink" to="/AddCard" >
                Add Card
            </NavLink>
        </nav>
    )
}

export default NavBar