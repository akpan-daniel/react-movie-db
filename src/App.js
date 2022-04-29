import { useEffect, useState } from 'react'
import MovieCard from './components/MovieCard'
import './App.css'
import SearchIcon from './search.svg'

// ee595121

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
      <div className='search'>
        <input
          placeholder='Search for movies'
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <img
          src={SearchIcon}
          alt='search icon'
          onClick={() => {searchMovies(search)}}
        />
      </div>

      {
        movies?.length > 0
        ? (
            <div className='container'>
              {movies.map((movie) => <MovieCard key={movie.Title} movie={movie} />)}
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
