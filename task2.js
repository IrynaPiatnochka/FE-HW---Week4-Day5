import React, { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: 'Top Gun: Maverick', genre: 'Action Drama', description: 'After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUNs elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.' },
        { id: 2, title: 'Cash Out', genre: 'Action', description: 'Professional thief Mason attempts his biggest heist with his brother, robbing a bank. When it goes wrong, they are trapped inside surrounded by law enforcement. Tension rises as Mason negotiates with his exlover, the lead negotiator.' },
        { id: 3, title: 'Lola', genre: 'Drama', description: 'Lola James works to save enough money to get her little brother, Arlo, out of their toxic home. Arlo keeps her hopeful, until one tragic night, when her whole world gets uprooted. From that moment on, nothing will ever be the same.' },
        { id: 4, title: 'Interstellar', genre: 'Sci-Fi', description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.' }
    ]);
    const [showAllMovies, setShowAllMovies] = useState(true);
    const [genreFilter, setGenreFilter] = useState('');

    const toggleDescription = (id) => {
        setMovies(prevMovies =>
            prevMovies.map(movie =>
                movie.id === id ? { ...movie, displayDescription: !movie.displayDescription } : movie
            )
        );
    };

    const removeMovie = (id) => {
        setMovies(prevMovies =>
            prevMovies.filter(movie => movie.id !== id)
        );
    };

    const toggleView = () => {
        setShowAllMovies(!showAllMovies);
        setGenreFilter(showAllMovies ? 'Action' : '');
    };

    return (
        <div>
            <h2>Favorite Movies</h2>
            <button onClick={toggleView}>{showAllMovies ? 'Show Action Movies' : 'Show All Movies'}</button>
            <ul>
                {movies
                    .filter(movie => showAllMovies || movie.genre === genreFilter)
                    .map(movie => (
                        <li key={movie.id} onClick={() => toggleDescription(movie.id)}>
                            {movie.title}
                            {movie.displayDescription && <p>{movie.description}</p>}
                            <button onClick={() => removeMovie(movie.id)}>Remove</button>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default MoviesList;
