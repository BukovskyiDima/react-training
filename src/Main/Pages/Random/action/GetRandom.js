import api from '../../service/api';

export const GIF_RANDOM_REQUEST = 'GIF_REQUEST';
export const GIF_RANDOM_REQUEST_SUCCESS = 'GIF_REQUEST_SUCCESS';
export const GIF_RANDOM_REQUEST_FAILED = 'GIF_REQUEST_FAILED';

const randomGifRequest = () => ({
    type: GIF_RANDOM_REQUEST,
    isFetching: true,
});

const randomGifRequestSuccess = (gifs) => ({
    type: GIF_RANDOM_REQUEST_SUCCESS,
    gifs,
    isFetching: false,
});

const randomGifRequestError = (error) => ({
    type: GIF_RANDOM_REQUEST_FAILED,
    isFetching: false,
    error,
});

export const getRandom = (dispatch) => {
    dispatch(randomGifRequest());
    api.random()
        .then(response => dispatch(randomGifRequestSuccess([response.data.data])))
        .catch(error => dispatch(randomGifRequestError(error)));
};
