import { useEffect, useState, Suspense, useRef } from 'react';
import { useParams, Link, Outlet, useLocation, } from 'react-router-dom';
import APIservices from "services/fetch";
import './style.css'

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const detailsData = await APIservices.fetchMovieDetails(movieId);
        setMovieDetails(detailsData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchData();
  }, [movieId]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Link to={backLinkHref.current}>Back</Link>
      <h2>{movieDetails.title}</h2>
      <img src={`http://image.tmdb.org/t/p/w300${movieDetails.poster_path}`} alt={movieDetails.title} />
      <p>Rating: {movieDetails.vote_average}</p>
      <p>Overview: {movieDetails.overview}</p>
      <p>Genres: {movieDetails.genres.map(genre => genre.name).join(', ')}</p>
      <Link to={`/movies/${movieId}/cast`}>View Cast</Link>
      <Link to={`/movies/${movieId}/reviews`}>View Reviews</Link>
      
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;

