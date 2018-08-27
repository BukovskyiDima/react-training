import { randomReducer } from "./reducer";
import * as action from "./action";

describe( 'reducer' ,() => {

    it('must be homeReducer GIF_RANDOM_REQUEST',() => {
        expect(randomReducer(undefined , {type: action.GIF_RANDOM_REQUEST})).toEqual(
            {
                error: null,
                isFetching: true,
                items: []
            }
        );
    });

    it('must be GIF_RANDOM_REQUEST_SUCCESS', () => {
        expect(randomReducer(undefined , {
            type: action.GIF_RANDOM_REQUEST_SUCCESS,
            payload: {
                items: {
                    item: 1
                }
            }
        })).toEqual(
            {
                error: null,
                isFetching: false,
                items: {
                    item: 1
                }
            }
        );
    });

    it('must be GIF_RANDOM_REQUEST_FAILED', () => {
        expect(randomReducer(undefined , {type: action.GIF_RANDOM_REQUEST_FAILED, error: 'error'})).toEqual(
            {
                error: 'error',
                isFetching: false,
                items: []
            }
        );
    });

});