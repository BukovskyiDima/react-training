import { TestScheduler } from 'rxjs/testing';
import {
    homeEpic,
    GIF_REQUEST,
    GIF_REQUEST_SEARCH,
    getGif,
    getGifByQuery
} from './index';
import { ActionsObservable } from "redux-observable";

const testScheduler = new TestScheduler((actual, expected) => {
    // somehow assert the two objects are equal
    // e.g. with chai `expect(actual).deep.equal(expected)`
});



describe('homeEpic', () => {

    let action$;
    let state$;
    let dependencies;

    beforeEach(() => {

        testScheduler.run(({ hot }) => {

            action$ = hot('-(a|)', {
                a: {type: GIF_REQUEST}
            });

            state$ = {};

            dependencies = {
                api: {
                    trending: jest.fn()
                }
            };

            homeEpic(action$, state$, dependencies);

        });
    });

    it('dispatches home page epics', () => {
        const action = ActionsObservable.of({
            type: GIF_REQUEST,
        });

        expect(dependencies.api.trending.mock.calls.length).toBe(1);

    })

});