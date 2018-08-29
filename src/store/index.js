import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { homeEpic } from '../Main/Pages/Home/services/';
import { randomEpic } from '../Main/Pages/Random/services';
import { authEpic } from '../Main/Pages/Auth/services';
import api from './api';
import { routerMiddleware } from "react-router-redux";

export default function (history) {

    const appEpic = combineEpics(
        homeEpic,
        randomEpic,
        authEpic,
    );

    const epicMiddleware = createEpicMiddleware({
        dependencies: {
            api
        }
    });

    const store = createStore(
        rootReducer,
        composeWithDevTools(),
        applyMiddleware(epicMiddleware, routerMiddleware(history)),
    );

    epicMiddleware.run(appEpic);

    return store;
}
