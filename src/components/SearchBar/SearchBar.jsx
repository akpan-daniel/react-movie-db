import SearchIcon from './search.svg'

const SearchBar = (props) => {

  const searchMovie = (event) => {
    event.preventDefault()
    props.searchMovie(props.search)
  }

  return (
    <form className='search' onSubmit={searchMovie}>
      <input
        placeholder='Search for movies'
        value={props.search}
        onChange={(event) => props.setSearch(event.target.value)}
      />
      <img
        src={SearchIcon}
        alt='search icon'
        onClick={searchMovie}
      />
    </form>
  );
}

export default SearchBar