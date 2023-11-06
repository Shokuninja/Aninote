import NavBar from "./NavBar";
import NewAnimeForm from "./NewAnimeForm";

function Home({updateFormData, addAnime}) {
    return (
        <>
            <NavBar />
            <h1>Aninote<br/>アニノート</h1>
            <NewAnimeForm updateFormData={updateFormData} addAnime={addAnime} />
        </>
    )
}

export default Home;