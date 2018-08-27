import { randomReducer } from "./reducer";
import * as action from "./action";

describe( 'reducer' ,() => {

    it('must be homeReducer GIF_RANDOM_REQUEST',() => {
        expect(randomReducer(undefined , action.GIF_RANDOM_REQUEST)).toEqual(
            {
                error: null,
                isFetching: false,
                items: []
            }
        );
    });

    it('must be GIF_RANDOM_REQUEST_SUCCESS', () => {
        expect(randomReducer(undefined , action.GIF_RANDOM_REQUEST_SUCCESS)).toEqual(
            {
                error: null,
                isFetching: false,
                items: []
            }
        );
    });

    it('must be GIF_RANDOM_REQUEST_FAILED', () => {
        expect(randomReducer(undefined , action.GIF_RANDOM_REQUEST_FAILED)).toEqual(
            {
                error: null,
                isFetching: false,
                items: []
            }
        );
    });

});