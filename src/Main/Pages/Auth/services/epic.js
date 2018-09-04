import * as AuthActions from "./action";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { combineEpics, ofType } from "redux-observable";
import { push } from 'react-router-redux';
import { getFavorites } from '../../Favorite/services/action';

const login = (action$, state$, {api}) => action$.pipe(
    ofType(AuthActions.LOGIN.REQUEST),
    switchMap((action) => {
        const {email, password} = action.payload;

        return api.logIn(email, password).pipe(
            switchMap((res) => of(AuthActions.loginSuccess({
                email: res.user.email,
                uid: res.user.uid
            }), getFavorites(), push('./'))),
            catchError((error) => of(AuthActions.loginError(error.message)))
        )
    })
);

const logout = (action$, state$, {api}) => action$.pipe(
    ofType(AuthActions.LOGOUT),
    switchMap(() => api.logOut().pipe(
            map(() => push('/login'))
        )
    )
);

const signup = (action$, state$, {api}) => action$.pipe(
    ofType(AuthActions.SIGNUP.REQUEST),
    switchMap(action => {
            const {email, password} = action.payload;
            return api.signUp(email, password).pipe(
                switchMap((res) => of(AuthActions.loginSuccess({
                    email: res.user.email,
                    uid: res.user.uid
                }))),
                catchError(({code, message}) => {
                    return code !== 'auth/email-already-in-use'
                        ? of(AuthActions.signupError(message))
                        : of(AuthActions.login(email, password))
                })
            )
        }
    )
);
export default combineEpics(login, logout, signup);