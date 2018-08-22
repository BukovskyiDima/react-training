import {
	GIF_REQUEST,
	GIF_REQUEST_SEARCH,
	gifRequestError,
	gifRequestSuccess
} from "./action";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { combineEpics, ofType } from "redux-observable";

const getGifsEpic = (action$, state$, {api}) => action$.pipe(
	ofType(GIF_REQUEST),
	mergeMap(() =>
		api.trending().pipe(
			map(response => gifRequestSuccess(response.response.data)),
			catchError(error => of(gifRequestError(error)))
		)
	)
);

const getGifsByQueryEpic = (action$, state$, {api}) => action$.pipe(
	ofType(GIF_REQUEST_SEARCH),
	mergeMap(() =>
		api.search(state$.value.home.query).pipe(
			map(response => gifRequestSuccess(response.response.data)),
			catchError(error => of(gifRequestError(error)))
		)
	)
);

export default combineEpics(getGifsEpic, getGifsByQueryEpic);