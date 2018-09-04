import { authReducer } from "./reducer";
import * as action from "./action";

describe( 'reducer' ,() => {

    it('must be homeReducer LOGIN.REQUEST',() => {
        expect(authReducer(undefined, {type: action.LOGIN.REQUEST})).toEqual(
            {
                user: null,
                loggedIn: false,
                loading: true,
                error: null,
            }
        )
    });

    it('must be homeReducer SIGNUP.REQUEST',() => {
        expect(authReducer(undefined, {type: action.SIGNUP.REQUEST})).toEqual(
            {
                user: null,
                loggedIn: false,
                loading: true,
                error: null,
            }
        )
    });

    it('must be LOGIN.SUCCESS', () => {
        expect(authReducer(undefined, {type: action.LOGIN.SUCCESS})).toEqual(
            {
                user: action.payload.user,
                loggedIn: true,
                error: null,
                loading: false
            }
        )
    });

    it('must be SIGNUP.SUCCESS', () => {
        expect(authReducer(undefined, {type: action.SIGNUP.SUCCESS})).toEqual(
            {
                user: action.payload.user,
                loggedIn: true,
                error: null,
                loading: false
            }
        )
    });

    it('must be LOGIN.ERROR', () => {
        expect(authReducer(undefined, {type: action.LOGIN.ERROR})).toEqual(
            {
                user: action.payload.user,
                loggedIn: true,
                loading: false,
                error: action.payload.error
            }
        )
    });

    it('must be SIGNUP.ERROR', () => {
        expect(authReducer(undefined, {type: action.SIGNUP.ERROR})).toEqual(
            {
                user: action.payload.user,
                loggedIn: true,
                loading: false,
                error: action.payload.error
            }
        )
    });

    it('must be LOGOUT', () => {
        expect(authReducer(undefined, {type: action.LOGOUT})).toEqual(
            {
                loading: false,
                user: null,
                loggedIn: false,
                error: null,
            }
        )
    });

});