import {
    ADD_TO_FAVORITE,
    REMOVE_FROM_FAVORITE
} from "./action";

const defaultState =  {

};

export const favoriteReducer = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_TO_FAVORITE: {
            return {
                ...state,
                [action.favoriteItem.id]: action.favoriteItem
            }
        }

        case REMOVE_FROM_FAVORITE: {
            delete state[action.id];
            return {
                ...state
            }
        }

        default: return state;
    }
};

