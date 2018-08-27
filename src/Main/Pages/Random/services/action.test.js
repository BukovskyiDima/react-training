import * as action from "./action";

describe( 'action' ,() => {

    it('must be GIF_RANDOM_REQUEST',() => {
        expect(action.randomGifRequest()).toEqual({type: 'GIF_RANDOM_REQUEST'});
    });

    it('must be GIF_RANDOM_REQUEST_SUCCESS', () => {
        expect(action.randomGifRequestSuccess({item: 1})).toEqual({
            type: 'GIF_RANDOM_REQUEST_SUCCESS',
            payload: {
                items: {
                    item: 1
                }
            }
        });
    });

    it('must be GIF_RANDOM_REQUEST_FAILED', () => {
        expect(action.randomGifRequestError()).toEqual({type: 'GIF_RANDOM_REQUEST_FAILED'});
    });
});