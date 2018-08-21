import {
	GIF_REQUEST,
	GIF_REQUEST_SEARCH,
	gifRequestError,
	gifRequestSuccess
} from "./action";
import api from '../../../../service/api';
import { from } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { combineEpics, ofType } from "redux-observable";

const getGifsEpic = action$ => action$.pipe(
	ofType(GIF_REQUEST),
	mergeMap(() =>
		from(api.trending()).pipe(
			map(response => gifRequestSuccess(response.data.data)),
			catchError(error => gifRequestError(error))
		)
	)
);

const getGifsByQueryEpic = (action$, state$) => action$.pipe(
	ofType(GIF_REQUEST_SEARCH),
	mergeMap(() =>
		from(api.search(state$.value.home.query)).pipe(
			map(response => gifRequestSuccess(response.data.data)),
			catchError(error => gifRequestError(error))
		)
	)
);

export default combineEpics(getGifsEpic, getGifsByQueryEpic);