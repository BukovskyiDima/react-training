import {
    LOGIN,
    SIGNUP,
    LOGOUT
} from "./action";

const defaultState = {
    user: null,
    loggedIn: false,
    loading: false,
    error: null,
};

export const authReducer = (state = defaultState, action) => {
    switch(action.type) {
        case LOGIN.REQUEST:
        case SIGNUP.REQUEST: {
            return {
                    ...state,
                    loading: true
                }
            }

        case LOGIN.SUCCESS:
        case SIGNUP.SUCCESS: {
            return {
                ...state,
                user: action.payload.user,
                loggedIn: true,
                error: null,
                loading: false
            }
        }

        case LOGIN.ERROR:
        case SIGNUP.ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        }

        case LOGOUT: {
            return {
                ...state,
                loading: true
            }
        }

        default: return state;
    }
};
