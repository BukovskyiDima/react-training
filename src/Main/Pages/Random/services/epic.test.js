import { of, throwError } from "rxjs";
import { ActionsObservable } from "redux-observable";
import { GIF_RANDOM_REQUEST, GIF_RANDOM_REQUEST_FAILED, randomEpic } from "./index";

describe('homeEpic', () => {

    it('dispatches home page epics getRandomGifEpic', done => {
        const action = ActionsObservable.of({
            type: GIF_RANDOM_REQUEST,
        });
        const state = {};
        const dependencies = {
            api: {
                random: jest.fn().mockReturnValue(of({
                    response: {
                        data: {
                            item: 1
                        }
                    }
                })),
            }
        };

        randomEpic(action, state, dependencies).subscribe((action) => {
            expect(dependencies.api.random.mock.calls.length).toBe(1);
            expect(action).toEqual({"payload": {"items": [{"item": 1}]}, "type": "GIF_RANDOM_REQUEST_SUCCESS"});
            done();
        });
    });

    it('dispatches home page epics getRandomGifEpic error', done => {
        const action = ActionsObservable.of({
            type: GIF_RANDOM_REQUEST,
        });
        const state = {};
        const dependencies = {
            api: {
                random: jest.fn().mockReturnValue(throwError(new Error())),
            }
        };

        randomEpic(action, state, dependencies).subscribe((action) => {
            expect(action).toEqual({
                type: GIF_RANDOM_REQUEST_FAILED,
                error: 'An error!'
            });
            done();
        });
    });
})
