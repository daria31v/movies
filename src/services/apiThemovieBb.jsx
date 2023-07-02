import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const params = {
  key: 'd7b62bbeb6d4f73491b6f9e9927a7e28',
  language: 'language=en-US',
  other: 'page=1&include_adult=false',
};

// for HOME
export const getTrendingMovies = async () => {
  const resp = await axios.get(`trending/all/day?api_key=${params.key}`);
  return resp.data;
};

// for Search
export const getSearchMovie = async query => {
  const response = await axios.get(
    `search/movie?api_key=${params.key}&${params.language}&query=${query}&${params.other}`
  );
  return response.data.results;
};

// for Movies details
export const getDetails = async id => {
  const details = await axios.get(
    `movie/${id}?api_key=${params.key}&${params.language}`
  );
  return details.data;
};

// for Cast
export const getCast = async id => {
  const casts = await axios.get(
    `movie/${id}/credits?api_key=${params.key}&${params.language}`
  );
  return casts.data.cast;
};

// for Reviews
export const getReviews = async credit_id => {
  const reviews = await axios.get(
    `movie/${credit_id}/reviews?api_key=${params.key}&${params.language}&page=1`
  );
  return reviews.data.results;
};
