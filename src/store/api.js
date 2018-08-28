import { ajax } from "rxjs/ajax";
import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBHkwzETMQ7Vt5XAgosfLAJqM98J9dxw-k",
    authDomain: "exadel-training-react-course.firebaseapp.com",
    databaseURL: "https://exadel-training-react-course.firebaseio.com",
    projectId: "exadel-training-react-course",
    storageBucket: "exadel-training-react-course.appspot.com",
    messagingSenderId: "1095008325302"
};
firebase.initializeApp(config);

// api key
// FipGdloXqHUVHcSHhtIBnhEmfJ89IvLv
// zW3QkmvOf9ivEjRrXElFxe0C4KFd3zfO

const API_KEY = 'FipGdloXqHUVHcSHhtIBnhEmfJ89IvLv';
const URL = 'https://api.giphy.com/v1/gifs';

const api = {

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

export default api;