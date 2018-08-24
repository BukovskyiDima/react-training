import { TestScheduler } from 'rxjs/testing';

const testScheduler = new TestScheduler((actual, expected) => {
    // somehow assert the two objects are equal
    // e.g. with chai `expect(actual).deep.equal(expected)`
});

testScheduler.run(({ hot, cold, expectObservable }) => {
    const action$ = hot('-a', {
        a: {type: 'FETCH_USER', id: '123'}
    });
    const state$ = null;
    const dependencies = {
        getJSON: url => cold('--a', {
            a: {url}
        })
    };

    const output$ = fetchUserEpic(action$, state$, dependencies);

    expectObservable(output$).toBe('---a', {
        a: {
            type: 'FETCH_USER_FULFILLED',
            response: {
                url: 'https://api.github.com/users/123'
            }
        }
    });
});