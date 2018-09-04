export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";
export const GET_FAVORITE = {
    REQUEST: "GET_FAVORITE_REQUEST",
    SUCCESS: "GET_FAVORITE_SUCCESS",
    FAILURE: "GET_FAVORITE_FAILURE"
};

export const addToFavorite = (favoriteItem) => {
    return {
        type: ADD_TO_FAVORITE,
        favoriteItem
    }
};

export const removeFromFavorite = (id) => {
    return {
        type: REMOVE_FROM_FAVORITE,
        id
    }
};
export const getFavorites = () => {
    return {
        type: GET_FAVORITE.REQUEST
    }
};

export const getFavoritesSuccess = (items) => {
    return {
        type: GET_FAVORITE.SUCCESS,
        items
    }
};

export const getFavoritesFailure = (error) => {
    return {
        type: GET_FAVORITE.FAILURE,
        error
    }
};