// for HOME

import axios from "axios";
// https://api.themoviedb.org/3/trending/all/day?api_key=d7b62bbeb6d4f73491b6f9e9927a7e28
const params = {
    key: 'd7b62bbeb6d4f73491b6f9e9927a7e28',
    options: '3/trending/all/day',

}
 
axios.defaults.baseURL = 'https://api.themoviedb.org/';

export async function fetchTrendingMovies(id, title) {
    const response = await axios.get(
        `${params.options}?api_key=${params.key}`
    );
    return response.data;
} 