import React from 'react';
import { Link } from 'react-router-dom';
const fallbackImage = "https://i.pinimg.com/564x/71/47/ad/7147ada1406770e3f8190a77cc577c8a.jpg";


const FoundMovies = ({ searchResults, state }) => {
  return (
    <ul>
      {searchResults.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{state}}>
            <img
              src={movie.poster_path ? `http://image.tmdb.org/t/p/w300${movie.poster_path}` : fallbackImage}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FoundMovies;
