import * as favoriteActions from './action';
import { of } from "rxjs";
import { switchMap, ignoreElements, map, catchError } from "rxjs/operators";
import { combineEpics, ofType } from "redux-observable";

const addFavorite = (action$, state$, {api}) => action$.pipe(
    ofType(favoriteActions.ADD_TO_FAVORITE),
    switchMap((action) => {
        return api.addToFavorite(action.favoriteItem).pipe(
                ignoreElements(),
                catchError(error => {
                    console.log(error);
                    return of({
                        type: 'ADD_TO_FAVORITE_FAILURE'
                    })
                })
            )
        }
    )
);

const removeFavorite = (action$, state$, {api}) => action$.pipe(
    ofType(favoriteActions.REMOVE_FROM_FAVORITE),
    switchMap((action) => {
            return api.deleteFromFavorite(action.id).pipe(
                ignoreElements()
            )
        }
    )
);

const getFavoriteItem = (action$, state$, {api}) => action$.pipe(
    ofType(favoriteActions.GET_FAVORITE.REQUEST),
    switchMap(() => api.getFavoriteItems().pipe(
        map((res) => favoriteActions.getFavoritesSuccess(res.val())),
        catchError(err => of(favoriteActions.getFavoritesFailure(err.message)))
    ))
);

export default combineEpics(addFavorite, removeFavorite, getFavoriteItem, removeFavorite);