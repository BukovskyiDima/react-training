import {
	GIF_REQUEST_FAILED,
	GIF_REQUEST,
	GIF_REQUEST_SUCCESS,
	GIF_REQUEST_SEARCH
} from "../Main/Pages/Home/action/";

import {
	GIF_RANDOM_REQUEST,
	GIF_RANDOM_REQUEST_SUCCESS,
	GIF_RANDOM_REQUEST_FAILED
} from "../Main/Pages/Random/action/";

export function gifs(state = [], action) {
	switch (action.type) {
		case GIF_REQUEST_SUCCESS:
		case GIF_RANDOM_REQUEST_SUCCESS:
			return action.gifs
		default:
			return state
	}
}

export function isGifsFetching(state = false, action) {
	switch (action.type) {
		case GIF_REQUEST:
		case GIF_REQUEST_SUCCESS:
		case GIF_REQUEST_FAILED:
		case GIF_REQUEST_SEARCH:
		case GIF_RANDOM_REQUEST:
		case GIF_RANDOM_REQUEST_SUCCESS:
		case GIF_RANDOM_REQUEST_FAILED:
			return action.isFetching;
		default:
			return state
	}
}
