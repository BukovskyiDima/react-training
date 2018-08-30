import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { homeEpic } from '../Main/Pages/Home/services/';
import { randomEpic } from '../Main/Pages/Random/services';
import { authEpic } from '../Main/Pages/Auth/services';
import { favoriteEpic } from "../Main/Pages/Favorite/services";
import giphyApi from './giphyApi';
import firebaseApi from './firebaseApi';
import { routerMiddleware } from "react-router-redux";

export default function (history) {

    firebaseApi.initialize();

    const appEpic = combineEpics(
        homeEpic,
        randomEpic,
        authEpic,
        favoriteEpic
    );

    const epicMiddleware = createEpicMiddleware({
        dependencies: {
            api: { ...giphyApi, ...firebaseApi },
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
