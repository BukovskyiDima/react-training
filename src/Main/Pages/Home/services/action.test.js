import * as action from "./action";

describe( 'action' ,() => {

    it('must be GIF_REQUEST',() => {
        expect(action.getGif().type).toBe('GIF_REQUEST');
    });

    it('must be GIF_REQUEST_SEARCH', () => {
        expect(action.getGifByQuery().type).toBe('GIF_REQUEST_SEARCH');
    });

    it('must be GIF_REQUEST_SUCCESS', () => {
        expect(action.gifRequestSuccess().type).toBe('GIF_REQUEST_SUCCESS');
    });

    it('must be GIF_REQUEST_FAILED', () => {
        expect(action.gifRequestError().type).toBe('GIF_REQUEST_FAILED');
    });

    it('must be GIF_REQUEST_SEARCH_QUERY', () => {
        expect(action.handleSearchRequestQuery().type).toBe('GIF_REQUEST_SEARCH_QUERY');
    });
});