export const LOGIN = {
    REQUEST: 'LOGIN_REQUEST',
    SUCCESS: 'LOGIN_SUCCESS',
    ERROR: 'LOGIN_ERROR'
};

export const SIGNUP = {
    REQUEST: 'SIGNUP_REQUEST',
    SUCCESS: 'SIGNUP_SUCCESS',
    ERROR: 'SIGNUP_ERROR'
};

export const LOGOUT = 'LOGOUT';

export const login = (email, password) => {
    return {
        type: LOGIN.REQUEST,
        payload: {email, password},
    };
};

export const loginSuccess = (user) => {
    return {
        type: LOGIN.SUCCESS,
        payload: {user},
    };
};

export const loginError = (error) => {
    return {
        type: LOGIN.ERROR,
        payload: {error},
    };
};

export const signup = (email, password) => {
    return {
        type: SIGNUP.REQUEST,
        payload: {email, password},
    };
};

export const signupSuccess = (user) => {
    return {
        type: SIGNUP.SUCCESS,
        payload: {user},
    };
};

export const signupError = (error) => {
    return {
        type: SIGNUP.ERROR,
        payload: {
            error
        },
    };
};

export const logout = () => {
    return {
        type: LOGOUT
    };
};