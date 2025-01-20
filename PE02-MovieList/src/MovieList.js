import React, { useState, useEffect } from "react";

// Import JSON file for movielist data and CSS file for styling
import movies from "./Movies.json";
import "./MovieList.css";

function MovieList() {
    const [selectedGenre, setSelectedGenre] = useState("All Genres");
    const [displayMovies, setDisplayMovies] = useState(movies);
    const [selectedMovie, setSelectedMovie] = useState(null);
    
    // Creating a list of all genres from the movie list data
    const uniqueGenres = ["All Genres", ...new Set(movies.map((movie) => movie.genre))];
    
    // Function to manage modificataions in selected genre
    const handleGenreChange = (event) => {
        const genre = event.target.value;
        setSelectedGenre(genre);
        if (genre === "All Genres") {
            setDisplayMovies(movies);
        } else {
            var filterMovies = movies.filter((movie) => movie.genre === genre);
            setDisplayMovies(filterMovies);
        }
    };
    
    // Function to manage click events for a movie
    function showMovieName(movie) {
        setSelectedMovie(movie.title);
        alert("You clicked on " + movie.title);
    }


    return (
        <div>
            <h1>
                Movie List
            </h1>
            <select className="selectBox" name="genre" id="genre" value={selectedGenre} onChange={handleGenreChange}>
                {uniqueGenres.map((genre, index) => (
                    <option key={index} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>

            {displayMovies.map((movie, index) => (
                <div className={`movieCard ${selectedMovie === movie.title ? "selected" : ""}`}  onClick={() =>showMovieName(movie)}>
                    <div className="movieTitle">
                        {movie.title}
                    </div>
                    <div>
                        {movie.genre}
                    </div>
                    <div>
                        Released: {movie.release_year}
                    </div>
                </div>
            ))}
        </div>
    )


}

export default MovieList;