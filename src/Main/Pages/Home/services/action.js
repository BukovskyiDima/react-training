import api from '../../../../service/api';

export const GIF_REQUEST = 'GIF_REQUEST';
export const GIF_REQUEST_SUCCESS = 'GIF_REQUEST_SUCCESS';
export const GIF_REQUEST_FAILED = 'GIF_REQUEST_FAILED';
export const GIF_REQUEST_SEARCH = 'GIF_REQUEST_SEARCH';

export const gifRequest = () => {
    return {
        type: GIF_REQUEST
    }
};

export const gifSearchRequest = () => {
    return {
        type: GIF_REQUEST_SEARCH
    }
};

export const gifRequestSuccess = (items) => {
    return {
        type: GIF_REQUEST_SUCCESS,
        payload: {items}
    }
};

export const gifRequestError = (error) => {
    return {
        type: GIF_REQUEST_FAILED,
        error
    }
};

export const action = (dispatch) => {
    dispatch(gifRequest());
    api.trending()
        .then(response => dispatch(gifRequestSuccess(response.data.data)))
        .catch(error => dispatch(gifRequestError(error)));
};

export const getSearchGifs = (dispatch, parametr) => {
    dispatch(gifSearchRequest());
    api.search(parametr)
        .then(response => dispatch(gifRequestSuccess(response.data.data)))
        .catch(error => dispatch(gifRequestError(error)));
}