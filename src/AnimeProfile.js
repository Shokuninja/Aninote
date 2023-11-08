import NavBar from './NavBar';
import { useParams } from 'react-router-dom';

function AnimeProfile({animes}) {

    const {id} = useParams()
    
    const anime = animes.find((a) => {
        return a.id === Number(id)
    })

    if (!anime) {
        
        return (
        <>
            <NavBar />
            <h1>Anime Not Found</h1> 
        </>)
    }

    return (
        <>
            <NavBar />
            <img src={anime.image} />
            <h3>Name: {anime.title}</h3>
            <h3>Mangaka: {anime.mangaka}</h3>
            <h3>Protagonist: {anime.protagonist}</h3>
        </>
    )
}

export default AnimeProfile;