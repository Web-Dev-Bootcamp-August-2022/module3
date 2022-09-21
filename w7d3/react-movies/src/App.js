// import { useState } from 'react';
// import Spinner from './components/Spinner'; 
import MovieList from './components/MovieList';
import './App.css';

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // if (isLoading) {
  //   return <Spinner />;
  // } 

  return (
    <div className="App">
      <MovieList />
    </div>
  );
}

export default App;
