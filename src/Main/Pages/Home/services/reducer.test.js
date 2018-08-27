import { homeReducer } from "./reducer";
import * as action from "./action";

describe( 'reducer' ,() => {

    it('must be homeReducer GIF_REQUEST',() => {
        expect(homeReducer(undefined , {type: action.GIF_REQUEST})).toEqual(
            {
                error: null,
                isFetching: true,
                items: [],
                query: ''
            }
        );
    });

    it('must be GIF_REQUEST_SUCCESS', () => {
        expect(homeReducer(undefined , {
            type: action.GIF_REQUEST_SUCCESS,
            payload: {
                items: {
                    item: 1
                }
            }
        })).toEqual(
            {
                error: null,
                isFetching: false,
                items: {item: 1},
                query: ''
            }
        );
    });

    it('must be GIF_REQUEST_FAILED', () => {
        expect(homeReducer(undefined , {
            type: action.GIF_REQUEST_FAILED,
            error: 'error'
        })).toEqual(
            {
                error: 'error',
                isFetching: false,
                items: [],
                query: ''
            }
        );
    });

    it('must be GIF_REQUEST_SEARCH', () => {
        expect(homeReducer(undefined , {
            type: action.GIF_REQUEST_SEARCH
        })).toEqual(
            {
                error: null,
                isFetching: true,
                items: [],
                query: ''
            }
        );
    });

    it('must be GIF_REQUEST_SEARCH_QUERY', () => {
        expect(homeReducer(undefined , {
            type: action.GIF_REQUEST_SEARCH_QUERY,
            query: 'qwer'
        })).toEqual(
            {
                error: null,
                isFetching: false,
                items: [],
                query: 'qwer'
            }
        );
    });
});