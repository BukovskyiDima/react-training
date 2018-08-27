import { homeReducer } from "./reducer";
import * as action from "./action";

describe( 'reducer' ,() => {

    it('must be homeReducer GIF_REQUEST',() => {
        expect(homeReducer(undefined , action.GIF_REQUEST)).toEqual(
            {
                error: null,
                isFetching: false,
                items: [],
                query: ''
            }
        );
    });

    it('must be GIF_REQUEST_SUCCESS', () => {
        expect(homeReducer(undefined , action.GIF_REQUEST_SUCCESS)).toEqual(
            {
                error: null,
                isFetching: false,
                items: [],
                query: ''
            }
        );
    });

    it('must be GIF_REQUEST_FAILED', () => {
        expect(homeReducer(undefined , action.GIF_REQUEST_FAILED)).toEqual(
            {
                error: null,
                isFetching: false,
                items: [],
                query: ''
            }
        );
    });

    it('must be GIF_REQUEST_SEARCH', () => {
        expect(homeReducer(undefined , action.GIF_REQUEST_SEARCH)).toEqual(
            {
                error: null,
                isFetching: false,
                items: [],
                query: ''
            }
        );
    });

    it('must be GIF_REQUEST_SEARCH_QUERY', () => {
        expect(homeReducer(undefined , action.GIF_REQUEST_SEARCH_QUERY)).toEqual(
            {
                error: null,
                isFetching: false,
                items: [],
                query: ''
            }
        );
    });
});