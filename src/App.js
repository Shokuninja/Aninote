import './App.css';
import MyAnimeList from "./MyAnimeList";
import MyCharacterList from "./MyCharacterList";
import AnimeProfile from "./AnimeProfile";
import Home from "./Home"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {

  const [animes, setAnimes] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:4000/animes')
    .then(response => response.json())
    .then(animeData => {
      setAnimes(animeData)
    })
  }, [])

  const routes = [
    {
      path: "/",
      element: <Home />
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
