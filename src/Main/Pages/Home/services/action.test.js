import * as action from "./action";

describe('action', () => {

    it('must be GIF_REQUEST', () => {
        expect(action.getGif()).toEqual({
            type: 'GIF_REQUEST'
        });
    });

    it('must be GIF_REQUEST_SEARCH', () => {
        expect(action.getGifByQuery()).toEqual({
            type: 'GIF_REQUEST_SEARCH'
        });
    });

    it('must be GIF_REQUEST_SUCCESS', () => {
        expect(action.gifRequestSuccess({a: 1})).toEqual({
            type: 'GIF_REQUEST_SUCCESS',
            payload: {
                items: {
                    a: 1
                }
            }
        });
    });

    it('must be GIF_REQUEST_FAILED', () => {
        expect(action.gifRequestError('error')).toEqual({
            type: 'GIF_REQUEST_FAILED',
            error: 'error'
        });
    });

    it('must be GIF_REQUEST_SEARCH_QUERY', () => {
        expect(action.handleSearchRequestQuery()).toEqual({type: 'GIF_REQUEST_SEARCH_QUERY'});
    });
});