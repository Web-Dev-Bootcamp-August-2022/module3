function MovieCard(props) {
    const { movie } = props;
   
    return (
      <div className="MovieCard">
        <h3>{movie.title}</h3>
        <p>Director: {movie.director}</p>
        <p>Rating: {movie.IMDBRating}</p>

        {movie.hasOscars && <p>Got the Oscar Award! </p>}
        {!movie.hasOscars && <p>Great movie but no Oscars! </p>}
        
        <button onClick={() => props.deleteMovie(movie._id)} className="btn-delete">
          Delete 
        </button>
      </div>
    );
  }
   
  export default MovieCard;