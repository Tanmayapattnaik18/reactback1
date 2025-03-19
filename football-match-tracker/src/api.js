import axios from 'axios';

export const fetchMatches = async (page = 2) => {
  try {
    const response = await axios.get(`https://jsonmock.hackerrank.com/api/football_matches?page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
