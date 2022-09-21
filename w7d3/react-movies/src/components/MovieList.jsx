import { useState } from 'react';
import FilterMovies from './FilterMovies';
import MovieCard from './MovieCard'; 
import AddMovie from './AddMovie';
import moviesData from '../data/movies-data.json'; // import the array of movie objects
 
function MovieList() {
  // Declare a state variable "movies"
  // and set the array from movies-data.json as the initial state
  const [movies, setMovies] = useState(moviesData);

  const deleteMovie = movieId => {
    const filteredMovies = movies.filter(movie => {
      return movie._id !== movieId;
    });
 
    setMovies(filteredMovies);
  };

   // filtering my list of movies so that argument "str" is the first letter of the movies title
   let filteredMovies;
  const filterMovieList = (str) => {
    if (str === "All") {
      filteredMovies = moviesData;
    } else {
      filteredMovies = moviesData.filter((movie) => {
        return movie.title[0].toLowerCase() === str.toLowerCase();
      });
    }
 
    setMovies(filteredMovies);
  };
 
  return (
    <div>
      <h2>Movie List</h2>

      <FilterMovies filterMovieList={filterMovieList} />
      <AddMovie movies={movies}  setMovies={setMovies}/>
      {movies.map(movie => {
        return (
          <MovieCard key={movie._id} movie={movie} deleteMovie={deleteMovie} />
        );
      })}
    </div>
  );
}
 
export default MovieList;