import './App.css';
import MovieCard from './MovieCard';
import SearchMovies from './SearchMovies';
import { useState, useEffect } from "react";
import DisplayMovies from './DisplayMovies';

function App() {
  

  return (
    <div className="App">
    <SearchMovies search={getMovies}/>

{movieObjectArray.map((movie) => {
      return <MovieCard title={movie.title} year={movie.year} id={movie.id} posterpath={movie.poster}/>
    })}
    </div>
  );
}

export default App;
