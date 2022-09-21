import { useState } from "react";
import {v4 as uuid } from 'uuid';
 
function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(true);

  const { movies, setMovies } = props;

  const handleTitleInput = e => setTitle(e.target.value);
 
  const handleDirectorInput = e => setDirector(e.target.value);
 
  const handleRatingInput = e => setIMDBRating(e.target.value);
 
  const handleOscarsInput = e => setHasOscars(e.target.checked);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update the movies array with the newMovie data from our form
    const _id = uuid()
    const newMovie = { _id, title, director, IMDBRating, hasOscars }
    // console.log('newMovie', newMovie);
    const moviesCopy = [...movies, newMovie]; // equivalent to moviesCopy.push(newMovie);
    //console.log('moviesCopy', moviesCopy);
    setMovies(moviesCopy) // update our parent state variable
    // Reset the form fields to ""
    setTitle("");
    setDirector("")
  }
 
  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>
 
      <form onSubmit={handleSubmit}>
      <label>Title:</label>
        <input 
          type="text" 
          name="title" 
          value={title} 
          onChange={handleTitleInput} 
        />
 
        <label>Director:</label>
        <input 
          type="text" 
          name="director" 
          value={director} 
          onChange={handleDirectorInput} 
        />
 
        <label>IMDB Rating:</label>
        <input 
          type="number" 
          name="IMDBRating" 
          value={IMDBRating} 
          onChange={handleRatingInput} 
        />
 
        <label>Won Oscars:</label>
        <input 
          type="checkbox" 
          name="hasOscars" 
          checked={hasOscars} 
          onChange={handleOscarsInput} 
        />
 
        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}
 
export default AddMovie;