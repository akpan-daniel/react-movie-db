import { useEffect, useState } from 'react'
import { MovieCard, SearchBar } from './components'
import './App.css'

const API_URL = 'https://www.omdbapi.com?apikey=ee595121'

function App() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')
  
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search);
  }
  
  useEffect(() => {
    searchMovies('batman')
  }, [])
  
  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <SearchBar search={search} setSearch={setSearch} searchMovie={searchMovies} />

      {
        movies?.length > 0
        ? (
            <div className='container'>
              {movies.map((movie) => <MovieCard key={`${movie.Title} - ${movie.Year}`} movie={movie} />)}
            </div>
        )
        : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  );
}

export default App;
