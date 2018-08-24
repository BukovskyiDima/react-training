import { GIF_RANDOM_REQUEST, GIF_RANDOM_REQUEST_FAILED, GIF_RANDOM_REQUEST_SUCCESS } from "./action";

const defaultState = {
    items: [],
    isFetching: false,
    error: null,
};

export const randomReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GIF_RANDOM_REQUEST:
            return {
                ...state,
                isFetching: true,
            };

        case GIF_RANDOM_REQUEST_SUCCESS:
            return {
                ...state,
                items: action.payload.items,
                isFetching: false,
            };

        case GIF_RANDOM_REQUEST_FAILED:
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };

        default:
            return state
    }
};
