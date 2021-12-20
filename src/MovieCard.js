import "./App.css";
import DisplayMovies from "./DisplayMovies";

function MovieCard({ title, year, id, poster }) {
    
    return (
    <div className="movie-card">
    <h1>{title}</h1> 
    <h2>{year}</h2>
    <p>{id}</p>
    <img src={poster} alt="poster" />
    </div>
    )
}

export default MovieCard

