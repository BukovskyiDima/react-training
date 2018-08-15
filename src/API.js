import axios from 'axios';

export const getTrendingGifs = () => {

  return axios({
    method: 'get',
    url: 'https://api.giphy.com/v1/gifs/trending?api_key=FipGdloXqHUVHcSHhtIBnhEmfJ89IvLv&limit=24&rating=G',
  })
    .then(
      (response) => {
        return response.data.data;
      }
    );
};

export const getSearchedGifs = () => {

  let parameter = document.querySelector('input').value;

  axios({
    method: 'get',
    url: `https://api.giphy.com/v1/gifs/search?q=` + parameter + `&api_key=FipGdloXqHUVHcSHhtIBnhEmfJ89IvLv&limit=24&rating=G`,
  })
    .then(
      (response) => {
        return response.data.data;
      }
    )
};

export const getRandomGifs = () => {
  let arr = [];

  axios({
    method: 'get',
    url: `https://api.giphy.com/v1/gifs/random?api_key=FipGdloXqHUVHcSHhtIBnhEmfJ89IvLv&limit=24&rating=G`,
  })
    .then(
      (response) => {
        arr.push(response.data.data);
        return arr;
      }
    )
};