import * as action from "./action";

describe( 'action' ,() => {

    it('must be GIF_RANDOM_REQUEST',() => {
        expect(action.randomGifRequest().type).toBe('GIF_RANDOM_REQUEST');
    });

    it('must be GIF_RANDOM_REQUEST_SUCCESS', () => {
        expect(action.randomGifRequestSuccess().type).toBe('GIF_RANDOM_REQUEST_SUCCESS');
    });

    it('must be GIF_RANDOM_REQUEST_FAILED', () => {
        expect(action.randomGifRequestError().type).toBe('GIF_RANDOM_REQUEST_FAILED');
    });
});