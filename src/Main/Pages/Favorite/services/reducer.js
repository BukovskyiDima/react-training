import {
    ADD_TO_FAVORITE,
    REMOVE_FROM_FAVORITE,
    GET_FAVORITE
} from "./action";

const defaultState =  {
    items: {},
    isFetching: false,
    error: null
};

export const favoriteReducer = (state = defaultState, action) => {

    const items = state.items;

    switch(action.type) {
        case ADD_TO_FAVORITE: {
            return {
                ...state,
                items: {
                    ...items,
                    [action.favoriteItem.id]: action.favoriteItem
                }
            }
        }

        case REMOVE_FROM_FAVORITE: {
            delete items[action.id];
            return {
                ...state,
                items: {
                    ...items
                }
            }
        }

        case GET_FAVORITE.REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }

        case GET_FAVORITE.SUCCESS: {
            return {
                ...state,
                items: action.items || {},
                isFetching: false
            }
        }

        case GET_FAVORITE.FAILURE: {
            return {
                ...state,
                error: action.error
            }
        }

        default: return state;
    }
};

