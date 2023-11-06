import './App.css';
import MyAnimeList from "./MyAnimeList";
import MyCharacterList from "./MyCharacterList";
import AnimeProfile from "./AnimeProfile";
import Home from "./Home"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {

  const [animes, setAnimes] = useState([])
  const [formData, setFormData] = useState({})

  useEffect(() => {
    fetch('http://127.0.0.1:4000/animes')
    .then(response => response.json())
    .then(animeData => {
      setAnimes(animeData)
    })
  }, [])

  function addAnime(event) {
    // event.preventDefault()

    fetch('http://127.0.0.1:4000/animes', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(newAnime => {
      setAnimes([...animes, newAnime])
    })
  }

  function updateFormData(event) {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const routes = [
    {
      path: "/",
      element: <Home  updateFormData={updateFormData} addAnime={addAnime} />
    },

    {
      path: "/animes",
      element: <MyAnimeList animes={animes} />
    },

    {
      path: "/characters",
      element: <MyCharacterList />
    },
    {
      path: "/anime-profile/:id",
      element: <AnimeProfile animes={animes} />
    }
  ]

  const router = createBrowserRouter(routes)

  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
