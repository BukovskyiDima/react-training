import {
    GIF_RANDOM_REQUEST,
    GIF_RANDOM_REQUEST_SUCCESS,
    GIF_RANDOM_REQUEST_FAILED
} from "../Main/Pages/Random/action/";

export function random(state = [], action) {
    switch (action.type) {
        case GIF_RANDOM_REQUEST_SUCCESS: return action.gifs
        default: return state
    }
}

export function isRandomGifsFetching(state = false, action) {
    switch (action.type) {
        case GIF_RANDOM_REQUEST:
        case GIF_RANDOM_REQUEST_SUCCESS:
        case GIF_RANDOM_REQUEST_FAILED:
            return action.isFetching;
        default: return state
    }
}
