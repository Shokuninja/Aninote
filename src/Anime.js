import { Link } from 'react-router-dom'; 

function Anime({anime}) {

    console.log(anime)
    return (
        <li>
            <h3>Name: {anime.title}</h3>
            <h3>Mangaka: {anime.mangaka}</h3>
            <h3>Protagonist: {anime.protagonist}</h3>
            <Link to={`/anime-profile/${anime.id}`}>View Anime Info</Link>
        </li>
    )
}

export default Anime;

