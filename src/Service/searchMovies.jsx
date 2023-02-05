// for MOVIES

import axios from "axios";
// https://api.themoviedb.org/3/search/movie?api_key=d7b62bbeb6d4f73491b6f9e9927a7e28&language=en-US&page=1&include_adult=false
const params = {
    key: 'd7b62bbeb6d4f73491b6f9e9927a7e28',
    options: 'search/movie',
    other: '&language=en-US&page=1&include_adult=false',

}
 
axios.defaults.baseURL = 'https://api.themoviedb.org/';

export async function getTrendingMoviesById(id) {
    const response = await axios.get(
        `${params.options}?api_key=${params.key}&${params.other}`
    );
    return response.data;
} 