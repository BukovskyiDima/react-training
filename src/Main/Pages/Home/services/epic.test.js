import { GIF_REQUEST, GIF_REQUEST_FAILED, GIF_REQUEST_SEARCH, homeEpic } from './index';
import { ActionsObservable } from "redux-observable";
import { of, throwError } from "rxjs";

describe('homeEpic', () => {

    it('dispatches home page epics getGifsEpic', done => {
        const action = ActionsObservable.of({
            type: GIF_REQUEST,
        });
        const state = {};
        const dependencies = {
            api: {
                trending: jest.fn().mockReturnValue(of({
                    response: {
                        data: {
                            item: 1
                        }
                    }
                })),
            }
        };

        homeEpic(action, state, dependencies).subscribe((action) => {
            expect(dependencies.api.trending.mock.calls.length).toBe(1);
            expect(action).toEqual({"payload": {"items": {"item": 1}}, "type": "GIF_REQUEST_SUCCESS"});
            done();
        });
    });

    it('dispatches home page epics getGifsEpic error', done => {
        const action = ActionsObservable.of({
            type: GIF_REQUEST,
        });
        const state = {};
        const dependencies = {
            api: {
                trending: jest.fn().mockReturnValue(throwError(new Error())),
            }
        };

        homeEpic(action, state, dependencies).subscribe((action) => {
            expect(action).toEqual({
                type: GIF_REQUEST_FAILED,
                error: 'An error!'
            });
            done();
        });
    });

    it('dispatches home page epics getGifsByQueryEpic', done => {
        const action = ActionsObservable.of({
            type: GIF_REQUEST_SEARCH,
        });
        const state = {
            value: {
                home: {
                    query: 'dog'
                }
            }
        };
        const dependencies = {
            api: {
                search: jest.fn().mockReturnValue(of({
                    response: {
                        data: {
                            item: 1
                        }
                    }
                })),
            }
        };

        homeEpic(action, state, dependencies).subscribe((action) => {
            expect(dependencies.api.search.mock.calls.length).toBe(1);
            expect(action).toEqual({"payload": {"items": {"item": 1}}, "type": "GIF_REQUEST_SUCCESS"});
            done();
        });
    });
});