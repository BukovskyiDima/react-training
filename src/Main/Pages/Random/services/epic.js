import {
	GIF_RANDOM_REQUEST,
	randomGifRequestError,
	randomGifRequestSuccess
} from "./action";
import api from '../../../../service/api';
import { from } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { ofType } from "redux-observable";

const getRandomGifEpic = action$ => action$.pipe(
	ofType(GIF_RANDOM_REQUEST),
	mergeMap(() =>
		from(api.random()).pipe(
			map(response => randomGifRequestSuccess([response.data.data])),
			catchError(error => randomGifRequestError(error))
		)
	)
);

export default getRandomGifEpic;