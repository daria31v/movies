import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/';
// https://api.themoviedb.org/3/search/movie?api_key=d7b62bbeb6d4f73491b6f9e9927a7e28&language=en-US&page=1&include_adult=false
const params = {
  key: 'd7b62bbeb6d4f73491b6f9e9927a7e28',
  optionsForSearch: 'search/movie',
  optionsForTrending: '3/trending/all/day',
  // other: 'language=en-US&query=${query}&page=1&include_adult=false',
};

// for HOME
export const getTrendingMovies = async () => {
  const resp = await axios.get(
    `${params.optionsForTrending}?api_key=${params.key}`
  );
//   console.log(resp.data);
  return resp.data;
};

// for MOVIES
export const getSearchMovie = async query => {
  const response = await axios.get(
    `${params.optionsForSearch}?api_key=${params.key}&language=en-US&query=${query}&page=1&include_adult=false`
  );
//   console.log(response);
  return response;
};
