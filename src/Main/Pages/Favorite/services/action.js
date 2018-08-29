export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";

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
}
