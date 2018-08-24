export const GIF_REQUEST = 'GIF_REQUEST';
export const GIF_REQUEST_SUCCESS = 'GIF_REQUEST_SUCCESS';
export const GIF_REQUEST_FAILED = 'GIF_REQUEST_FAILED';
export const GIF_REQUEST_SEARCH = 'GIF_REQUEST_SEARCH';
export const GIF_REQUEST_SEARCH_QUERY = 'GIF_REQUEST_SEARCH_QUERY';

export const getGif = () => ({
    type: GIF_REQUEST
});

export const getGifByQuery = () => ({
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