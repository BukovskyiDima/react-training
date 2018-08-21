import {
    GIF_REQUEST,
    GIF_REQUEST_FAILED,
    GIF_REQUEST_SEARCH,
    GIF_REQUEST_SUCCESS
} from "action";


const defaultState = {
    items: [],
    isFetching: false,
    error: null,
};

export const homeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GIF_REQUEST:
            return {
                ...state,
                isFetching: true,
            };

        case GIF_REQUEST_SUCCESS:
            return {
                ...state,
                items: action.payload.items,
                isFetching: false,
            };

        case GIF_REQUEST_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };

        case GIF_REQUEST_SEARCH:
            return {
                ...state,
                isFetching: false,
            };

        default:
            return {
                ...state
            }
    }
}

