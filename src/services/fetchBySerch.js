import axios from 'axios';

export const searchByKeyword = async (keyword) => {
  try {
    const url = `https://api.themoviedb.org/3/search/keyword?api_key=15da45b97ad657540cf457ee5b3df568&query=${keyword}`;
    const response = await axios.get(url);
      const data = response.data;
    return data;
  } catch (error) {
    console.error("ERROR", error);
    throw error;
  }
};