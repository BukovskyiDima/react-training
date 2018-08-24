import { GIF_REQUEST, GIF_REQUEST_SEARCH, gifRequestError, gifRequestSuccess } from "./action";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { combineEpics, ofType } from "redux-observable";

const getGifsEpic = (action$, state$, {api}) => action$.pipe(
    ofType(GIF_REQUEST),
    switchMap(() =>
        api.trending().pipe(
            map(response => gifRequestSuccess(response.response.data)),
            // map(response => {throw Error()}),
            catchError(() => of(gifRequestError('An error!')))
        )
    )
);

const getGifsByQueryEpic = (action$, state$, {api}) => action$.pipe(
    ofType(GIF_REQUEST_SEARCH),
    switchMap(() =>
        api.search(state$.value.home.query).pipe(
            map(response => gifRequestSuccess(response.response.data)),
            catchError(() => of(gifRequestError('An error!')))
        )
    )
);

export default combineEpics(getGifsEpic, getGifsByQueryEpic);