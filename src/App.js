import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MovieList from './components/MovieList';
import Heading from './components/Heading';
import SearchBox from './components/SearchBox';

function App() {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=722d7494`
    const res =  await fetch(url)
    const resJson = await res.json()
    if (resJson.Search){
      setMovies(resJson.Search)
    }
    
  }
  useEffect(() => {
    getMovieRequest(searchValue)
  }, [searchValue])
  

  return (
    <div className="container-fluid movie-app">
    <div className="row d-flex align-items-center mt-4 mb-4">
        <Heading heading ="Movies" />
        <SearchBox 
          searchValue = {searchValue}
          setSearchValue = {setSearchValue} 
        />
    </div>
        <div className="row">
          <MovieList 
            movies = {movies} 
          />
        </div>
        
    </div>
  );
}

export default App;
