import api from '../../service/api';

export const GIF_RANDOM_REQUEST = 'GIF_REQUEST';
export const GIF_RANDOM_REQUEST_SUCCESS = 'GIF_REQUEST_SUCCESS';
export const GIF_RANDOM_REQUEST_FAILED = 'GIF_REQUEST_FAILED';

const gifRequest = () => ({
    type: GIF_RANDOM_REQUEST,
    isFetching: true,
});

const gifRequestSuccess = (gifs) => ({
    type: GIF_RANDOM_REQUEST_SUCCESS,
    gifs,
    isFetching: false,
});

const gifRequestError = (error) => ({
    type: GIF_RANDOM_REQUEST_FAILED,
    isFetching: false,
    error,
});

export const getRandom = (dispatch) => {
    dispatch(gifRequest());
    api.random()
        .then(response => dispatch(gifRequestSuccess(response)))
        .catch(error => dispatch(gifRequestError(error)));
};
