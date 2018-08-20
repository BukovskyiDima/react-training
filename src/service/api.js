import axios from 'axios';

const API_KEY = 'zW3QkmvOf9ivEjRrXElFxe0C4KFd3zfO';
const RANDOM_URL = 'https://api.giphy.com/v1/gifs/random';
const TRENDING_URL = 'https://api.giphy.com/v1/gifs/trending';
const SEARCH_URL = 'https://api.giphy.com/v1/gifs/search';

const api = {

  trending: () => {
    return axios({
      method: 'get',
      url: `${TRENDING_URL}?api_key=${API_KEY}&limit=24`,
    })
  },

  search: (value) => {

    let parameter = value;

    return axios({
      method: 'get',
      url: `${SEARCH_URL}?q=${parameter}&api_key=${API_KEY}&limit=24`,
    })
  },

  random: () => {
    return axios({
      method: 'get',
      url: `${RANDOM_URL}?api_key=${API_KEY}`,
    })
  },
};

export default api;