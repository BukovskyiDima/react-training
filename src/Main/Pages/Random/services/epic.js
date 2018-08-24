import { GIF_RANDOM_REQUEST, randomGifRequestError, randomGifRequestSuccess } from "./action";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";

const getRandomGifEpic = (action$, state$, {api}) => action$.pipe(
    ofType(GIF_RANDOM_REQUEST),
    mergeMap(() =>
        api.random().pipe(
            map(response => randomGifRequestSuccess([response.response.data])),
            catchError(error => of(randomGifRequestError(error)))
        )
    )
);

export default getRandomGifEpic;