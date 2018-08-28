import * as action from "./action";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { ofType } from "redux-observable";

const login = (action$, state$, {api}) => action$.pipe(
    ofType(action.LOGIN.REQUEST),
    switchMap(() => {
            const {email, password} = action.login.payload;

            if(password === '1') {
                return of(action.loginSuccess({
                    email
                }));
            }

            return of(action.loginError({
                error: 'login error'
            }))
        }
    )
);

const logout = (action$, state$, {api}) => action$.pipe(
    ofType(action.LOGOUT),
    switchMap(() => {

        }
    )
);

const signup = (action$, state$, {api}) => action$.pipe(
    ofType(action.SIGNUP.REQUEST),
    switchMap(() => {
            const {email, password} = action.signup.payload;

            if(email !== 'admin@gmail.com') {
                return of(action.signupSuccess({
                    email
                }));
            }

            return of(action.signupError({
                error: 'signup error'
            }))
        }
    )
);
