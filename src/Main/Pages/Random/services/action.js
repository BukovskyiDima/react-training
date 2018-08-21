import api from '../../../../service/api';

export const GIF_RANDOM_REQUEST = 'GIF_RANDOM_REQUEST';
export const GIF_RANDOM_REQUEST_SUCCESS = 'GIF_RANDOM_REQUEST_SUCCESS';
export const GIF_RANDOM_REQUEST_FAILED = 'GIF_RANDOM_REQUEST_FAILED';

export const randomGifRequest = () => {
    return {
        type: GIF_RANDOM_REQUEST
    }
};

export const randomGifRequestSuccess = (items) => {
    return {
        type: GIF_RANDOM_REQUEST_SUCCESS,
        payload: {items}
    }
};

export const randomGifRequestError = (error) => {
    return {
        type: GIF_RANDOM_REQUEST_FAILED,
        error
    }
};

export const action = (dispatch) => {
    dispatch(randomGifRequest());
    api.random()
        .then(response => dispatch(randomGifRequestSuccess([response.data.data])))
        .catch(error => dispatch(randomGifRequestError(error)));
};
