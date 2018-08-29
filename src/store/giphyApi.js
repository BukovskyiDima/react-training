import { ajax } from "rxjs/ajax";

// api key
// FipGdloXqHUVHcSHhtIBnhEmfJ89IvLv
// zW3QkmvOf9ivEjRrXElFxe0C4KFd3zfO

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const URL = 'https://api.giphy.com/v1/gifs';

const giphyApi = {

    trending: () => {
        return ajax({
            url: `${URL}/trending?api_key=${API_KEY}&limit=24`,
            responseType: 'json'
        })
    },

    search: (value) => {

        return ajax({
            url: `${URL}/search?q=${value}&api_key=${API_KEY}&limit=24`,
            responseType: 'json'
        })
    },

    random: () => {
        return ajax({
            url: `${URL}/random?api_key=${API_KEY}`,
            responseType: 'json'
        })
    },
};

export default giphyApi;