import * as action from "./action";

describe('action', () => {

    it('it must be LOGIN_REQUEST', () => {

        expect(action.login('EMAIL', 123)).toEqual({
            type: "LOGIN_REQUEST",
            payload: {
                email: 'EMAIL',
                password: 123
            }
        });

    });

    it('it must be LOGIN_SUCCESS', () => {

        expect(action.loginSuccess('userName')).toEqual({
            type: "LOGIN_SUCCESS",
            payload: {
                user: 'userName'
            }
        });

    });

    it('it must be LOGIN_ERROR', () => {

        expect(action.loginError('my error')).toEqual({
            type: "LOGIN_ERROR",
            payload: {
                error: "my error"
            }
        });

    });

    it('it must be SIGNUP_REQUEST', () => {

        expect(action.signup('email', 'password')).toEqual({
            type: "SIGNUP_REQUEST",
            payload: {
                email: "email",
                password: "password"
            }
        });

    });

    it('it must be SIGNUP_SUCCESS', () => {
        expect(action.signupSuccess('user')).toEqual({
            type: "SIGNUP_SUCCESS",
            payload: {
                user: 'user'
            },
        });
    });

    it('it must be SIGNUP_ERROR', () => {
        expect(action.signupError('error')).toEqual({
            type: "SIGNUP_ERROR",
            payload: {
                error: 'error'
            },
        });
    });
});
