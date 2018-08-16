import axios from 'axios';

const API_KEY = 'FipGdloXqHUVHcSHhtIBnhEmfJ89IvLv';
const RANDOM_URL = 'https://api.giphy.com/v1/gifs/random';
const TRENDING_URL = 'https://api.giphy.com/v1/gifs/trending';
const SEARCH_URL = 'https://api.giphy.com/v1/gifs/search';

const api = {

  trending: () => {
    axios({
      method: 'get',
      url: TRENDING_URL + `?api_key=`+ API_KEY +`&limit=24`,
    })
      .then(
        (response) => {
          return response.data.data;
        }
      );
  },

  search: (value) => {

    let parameter = value;

    axios({
      method: 'get',
      url: SEARCH_URL + `q=` + parameter + `&api_key=`+ API_KEY +`&limit=24`,
    })
      .then(
        (response) => {
          return response.data.data;
        }
      )
  },

  random: () => {
    let arr = [];

    axios({
      method: 'get',
      url: RANDOM_URL + `?api_key=`+ API_KEY +`&limit=24`,
    })
      .then(
        (response) => {
          arr.push(response.data.data);
          return arr;
        }
      )
  },
};

export default api;