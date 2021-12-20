import SearchMovies from "./SearchMovies.js";
import {useEffect} from "react";

function DisplayMovies({ movieObjectArray }) {

    let movieCard = {};

    useEffect(() => {
      console.log("i use effect");
      SetMovieProperty();
    },[movies])

    async function SetMovieProperty() {
    console.log("i setmovieprop");
    const moviesLength = Object.keys(movies.Search).length; 
    console.log(moviesLength);

    if (moviesLength > 0) {
      console.log("movies > 0");
    for (let i = 0; i < moviesLength; i++) {
      movieCard = {
        title: movies.Search[i].Title,
        year: movies.Search[i].Year,
        poster: movies.Search[i].Poster,
        id: movies.Search[i].imdbID,
      }
      console.log(movieCard);
      const movieObjectArray = [];
      movieObjectArray.push(movieCard);
    }
  }

    return (
        <div>

        </div>
    )
}
}

export default DisplayMovies

