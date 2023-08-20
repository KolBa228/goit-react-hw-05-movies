import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import APIservices from "services/fetch";

const Movies = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const movieKeyWordParam = params.get('movieKeyWord');

    if (movieKeyWordParam) {
      setSearchKeyword(movieKeyWordParam);
      handleSearch();
    }
  }, [location.search]);

  useEffect(() => {
    handleSearch();
  }, [searchKeyword, handleSearch]);

  const handleSearch = async () => {
    try {
      navigate(`/movies?movieKeyWord=${searchKeyword}`);
      setSearchResults([]);

      const response = await APIservices.fetchMoviesByName(searchKeyword);
      setSearchResults(response.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  return (
    <div>
      <h1>Movies By Search</h1>
      <input
        type="text"
        value={searchKeyword}
        onChange={handleInputChange}
        placeholder="Search movies..."
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
