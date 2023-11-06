import { NavLink } from 'react-router-dom'

function NavBar() {
    return (

        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/animes">Animes</NavLink>
            <NavLink to="/characters">Characters</NavLink>
        </nav>

    )
}

export default NavBar;