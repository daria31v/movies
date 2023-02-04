import axios from "axios";

const params = {
    key: 'd7b62bbeb6d4f73491b6f9e9927a7e28',
    options: '/trending/get-trending',

}
 
axios.defaults.baseURL = 'ttps://api.themoviedb.org/';

export async function fetchImages(query, page) {
    const response = await axios.get(
        `?api_key=${params.key}&${params.options}`
    );
    return response.data;
} 