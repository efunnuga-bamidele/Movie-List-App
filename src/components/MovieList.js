function MovieList({movies}){
    return(
        <>
        {movies && movies.map((movie, index) => (
           
                <div key={index} className="image-container d-flex justify-content-start m3">
                    <img src={movie.Poster} alt="movie-poster"/>
                </div>
           
          ))}
          </>
    )
}
export default MovieList;