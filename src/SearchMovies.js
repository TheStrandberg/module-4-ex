import "./App.css";
import {useState} from "react";

function SearchMovies({ movies, getMovies }) {
  
  const [movies, setMovies] = useState([]);

  let movieArray = [];

    async function getMovies() {
      console.log("i get movies");
      const movieTitle = document.querySelector("input").value;
      const response = await fetch("http://www.omdbapi.com/?apikey=37fe945a&s=" + movieTitle);
      movieArray = await response.json();
      setMovies(movieArray);
    }

    console.log("movies: ", movies);
}

return (
  <div className="search-window">
    <input placeholder="Title" />
    <button className="search-btn" onClick={ getMovies }>Search</button>
  </div>
);

export default SearchMovies;
