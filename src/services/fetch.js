const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '15da45b97ad657540cf457ee5b3df568';

async function fetchTrendingMovies() {
  const url = `${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        `Status code: ${data.status_code}. Status message: ${data.status_message}`
      );
    }

    return data.results;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function fetchMoviesByName(query) {
  const url = `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        `Status code: ${data.status_code}. Status message: ${data.status_message}`
      );
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function fetchMovieDetails(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?language=en-US&api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        `Status code: ${data.status_code}. Status message: ${data.status_message}`
      );
    }

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

async function fetchMovieCredits(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        `Status code: ${data.status_code}. Status message: ${data.status_message}`
      );
    }

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

async function fetchMovieReviews(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/reviews?language=en-US&&page=1&api_key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        `Status code: ${data.status_code}. Status message: ${data.status_message}`
      );
    }

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

const APIservices = {
  fetchTrendingMovies,
  fetchMoviesByName,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
};

export default APIservices;