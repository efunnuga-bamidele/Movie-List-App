import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MovieList from './components/MovieList';
import Heading from './components/Heading';
import SearchBox from './components/SearchBox';
import AddFavourite from './components/AddFavourite';

function App() {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [favourites, setFavourites] = useState([])

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
  
  const handleAddFavourite = (movie) => {
    
    const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
    console.log(newFavouriteList)
    // 
    // setFavourites(newFavouriteList)

  }

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
            handleFavouriteClick={handleAddFavourite}
            favouriteComponent ={AddFavourite}
          />
        </div>
        <div className="row d-flex align-items-center mt-4 md-4">
          <Heading heading="Favourite" />
        </div>
        <div className="row">
          <MovieList
            movies={favourites}
            handleFavouriteClick=""
            favouriteComponent =""
          />
        </div> 
    </div>
  );
}

export default App;
