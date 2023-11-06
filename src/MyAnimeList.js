import NavBar from "./NavBar";
import Anime from "./Anime";
import { dblClick } from "@testing-library/user-event/dist/click";

function MyAnimeList({animes}) {
    const myAnimes = animes.map(anime => {
        return (
            <Anime key={anime.id} anime={anime} />
        )
    })

    return (
        <>
            <NavBar />
            <ul>
               {myAnimes} 
            </ul>
        </>
    )

}

export default MyAnimeList;