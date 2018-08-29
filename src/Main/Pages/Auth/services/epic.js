import * as AuthActions from "./action";
import { of } from "rxjs";
import { catchError, map, switchMap, tap, delay, take } from "rxjs/operators";
import { combineEpics, ofType } from "redux-observable";
import { push } from 'react-router-redux'

const login = (action$, state$, {api}) => action$.pipe(
    ofType(AuthActions.LOGIN.REQUEST),
    switchMap((action) => {
        const {email, password} = action.payload;

        return api.logIn(email, password).pipe(
            switchMap((res) => of(AuthActions.loginSuccess({
                email: res.user.email,
                uid: res.user.uid
            })), push('/')),
            catchError((error) => of(AuthActions.loginError(error.message)))
        )
    })
);

const logout = (action$, state$, {api}) => action$.pipe(
    ofType(AuthActions.LOGOUT),
    switchMap((action) => api.logOut().pipe(
            map(() => push('/login'))
        )
    )
);

// const signup = (action$, state$, {api}) => action$.pipe(
//     ofType(AuthActions.SIGNUP.REQUEST),
//     // switchMap((action) => {
//     //     const {email, password} = action.payload;
//     //
//     //     return api.signUp(email, password)
//     // })
//     delay(5000),
//     tap(action => {
//         console.log('hi');
//         const {email, password} = action.payload;
//         api.signUp(email, password).pipe(
//             catchError((error) => {
//                 console.log(error);
//             })
//         )
//     }),
//     take(1)
// );

export default combineEpics(login, logout);