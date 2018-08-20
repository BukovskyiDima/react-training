import axios from 'axios';

const API_KEY = 'zW3QkmvOf9ivEjRrXElFxe0C4KFd3zfO';
const URL = 'https://api.giphy.com/v1/gifs';

const api = {

	trending: () => {
		return axios({
			method: 'get',
			url: `${URL}/trending?api_key=${API_KEY}&limit=24`,
		})
	},

	search: (value) => {

		return axios({
			method: 'get',
			url: `${URL}/search?q=${value}&api_key=${API_KEY}&limit=24`,
		})
	},

	random: () => {
		return axios({
			method: 'get',
			url: `${URL}/random?api_key=${API_KEY}`,
		})
	},
};

export default api;