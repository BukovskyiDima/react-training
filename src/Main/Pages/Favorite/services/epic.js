import * as favoriteActions from './action';
import { of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { combineEpics, ofType } from "redux-observable";

const addFavorite = (action$, state$) => action$.pipe(
    ofType(favoriteActions.ADD_TO_FAVORITE),
    switchMap(() => {
            return of(favoriteActions.addToFavorite({

            }));
        }
    )
);

const removeFavorite = (action$, state$) => action$.pipe(
    ofType(favoriteActions.REMOVE_FROM_FAVORITE),
    switchMap(() => {
        return of(favoriteActions.removeFromFavorite({

        }));
        }
    )
);

export default combineEpics(addFavorite, removeFavorite);