import api from '../../../../service/api';

export const GIF_REQUEST = 'GIF_REQUEST';
export const GIF_REQUEST_SUCCESS = 'GIF_REQUEST_SUCCESS';
export const GIF_REQUEST_FAILED = 'GIF_REQUEST_FAILED';
export const GIF_REQUEST_SEARCH = 'GIF_REQUEST_SEARCH';
export const GIF_REQUEST_SEARCH_QUERY = 'GIF_REQUEST_SEARCH_QUERY';

export const gifRequest = () => ({
    type: GIF_REQUEST
});

export const gifSearchRequest = () => ({
        type: GIF_REQUEST_SEARCH
});

export const gifRequestSuccess = (items) => ({
    type: GIF_REQUEST_SUCCESS,
    payload: {items}
});

export const gifRequestError = (error) => ({
    type: GIF_REQUEST_FAILED,
    error
});

export const handleSearchRequestQuery = (query) => ({
    type: GIF_REQUEST_SEARCH_QUERY,
    query
});


export const getGifs = () => (dispatch) => {
    dispatch(gifRequest());
    api.trending()
        .then(response => dispatch(gifRequestSuccess(response.data.data)))
        .catch(error => dispatch(gifRequestError(error)));
};

export const getSearchGifs = () => (dispatch, getState) => {
    dispatch(gifSearchRequest());
    api.search(getState().home.query)
        .then(response => dispatch(gifRequestSuccess(response.data.data)))
        .catch(error => dispatch(gifRequestError(error)));
};