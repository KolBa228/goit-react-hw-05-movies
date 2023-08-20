import axios from 'axios';

export const fetchReviewById = async (reviewId) => {
  try {
    const url = `https://api.themoviedb.org/3/review/${reviewId}?api_key=15da45b97ad657540cf457ee5b3df568`;
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("ERROR", error);
    throw error;
  }
};
