function MovieList({movies, handleFavouriteClick, favouriteComponent}){
    const FavouriteComponent = favouriteComponent;
    return(
        <>
        {movies && movies.map((movie, index) => (
           
                <div key={index} className="image-container d-flex justify-content-start m-3">
                    <img src={movie.Poster} alt="movie-poster"/>
                    <div onClick= {() => handleFavouriteClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                        <FavouriteComponent />
                    </div>
                </div>
           
          ))}
          </>
    )
}
export default MovieList;