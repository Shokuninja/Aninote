function NewAnimeForm({updateFormData, addAnime={addAnime}}) {
    return (
        <div className="new-plant-form">
            <h2>New Anime</h2>
            <form onSubmit={addAnime}>
            <input onChange={updateFormData} type="text" name="title" placeholder="Title" />
            <input onChange={updateFormData} type="text" name="mangaka" placeholder="Mangaka" />
            <input onChange={updateFormData} type="text" name="protagonist" placeholder="protagonist" />
            <button type="submit">Add Anime</button>
            </form>
        </div>
    )
}

export default NewAnimeForm;