import * as AuthActions from "./action";
import { of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { combineEpics, ofType } from "redux-observable";
import { push } from "react-router-redux";


const login = (action$, state$, {api}) => action$.pipe(
    ofType(AuthActions.LOGIN.REQUEST),
    switchMap((action) => {
            const {email, password} = action.payload;

            if (password === '1') {
                return of(AuthActions.loginSuccess({
                    email
                }), push('/'));
            }

            return of(AuthActions.loginError({
                error: 'login error'
            }))
        }
    )
);

const logout = (action$, state$, {api}) => action$.pipe(
    ofType(AuthActions.LOGOUT),
    switchMap(() => {
            return of(push('/login'));
        }
    )
);

// const signup = (action$, state$, {api}) => action$.pipe(
//     ofType(AuthActions.SIGNUP.REQUEST),
//     switchMap((action) => {
//             const {email, password} = action;
//
//             if(email !== 'admin@gmail.com') {
//                 return of(AuthActions.signupSuccess({
//                     email
//                 }));
//             }
//
//             return of(AuthActions.signupError({
//                 error: 'signup error'
//             }))
//         }
//     )
// );

export default combineEpics(login, logout);