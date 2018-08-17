import api from "../serves/api";

export const GIF_REQUEST = 'GIF_REQUEST';
export const GIF_REQUEST_SUCCESS = 'GIF_REQUEST_SUCCESS';
export const GIF_REQUEST_FAILED = 'GIF_REQUEST_FAILED';

const gifRequest = () => ({
	type: GIF_REQUEST,
	isFetching: true,
});

const gifRequestSuccess = (gifs) => ({
	type: GIF_REQUEST_SUCCESS,
	gifs,
	isFetching: false,
});

const gifRequestError = (error) => ({
	type: GIF_REQUEST_FAILED,
	isFetching: false,
	error,
});


export const getGifs = (dispatch) => {
	dispatch(gifRequest());
	api.trending()
		.then(response => dispatch(gifRequestSuccess(response.data.data)))
		.catch(error => dispatch(gifRequestError(error)));
};