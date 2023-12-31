import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import APIservices from "services/fetch";
import FormSearch from "components/FormSearch/FormSearch";
import FoundMovies from "components/FoundMovies/FoundMovies";

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieKeyWord = searchParams.get('movieKeyWord') ?? '';
  const location = useLocation();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await APIservices.fetchMoviesByName(movieKeyWord);
      setSearchResults(response.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(movieKeyWord);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async (keyword) => {
    try {
      const response = await APIservices.fetchMoviesByName(keyword);
      setSearchResults(response.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (e) => {
    setSearchParams({ movieKeyWord: e.target.value });
  };

  
  return (
    <div>
      <h1>Search</h1>
      <FormSearch
        value={movieKeyWord}
        onChange={handleInputChange}
        onSubmit={handleSearch}
      />
      <FoundMovies searchResults={searchResults} state={{ from: location } } />
    </div>
  );
};

export default Movies;

