

import axios from "axios";

// https://api.themoviedb.org/3/search/movie?api_key=d7b62bbeb6d4f73491b6f9e9927a7e28&language=en-US&page=1&include_adult=false
const params = {
    key: 'd7b62bbeb6d4f73491b6f9e9927a7e28',
    optionsForSearch: 'search/movie',
    optionsForTrending: '3/trending/all/day',
    other: '&language=en-US&page=1&include_adult=false',

}
 
axios.defaults.baseURL = 'https://api.themoviedb.org/';
// for HOME
export async function getTrendingMovies() {
    const response = await axios.get(
        `${params.optionsForTrending}?api_key=${params.key}`
    );
    console.log(response.data.results)
    return response.data.results;
    
} 

// for MOVIES
export async function getMoviesById(id) {
    const response = await axios.get(
        `${params.optionsForSearch}?api_key=${params.key}&${params.other}`
    );
    console.log(response.data.id)
    return response.data.id;
} 
