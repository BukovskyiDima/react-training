import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { homeEpic } from '../Main/Pages/Home/services/';
import { randomEpic } from '../Main/Pages/Random/services'
import api from './api';

export default function (initialState) {

	const appEpic = combineEpics(
		homeEpic,
		randomEpic
	);

	const epicMiddleware = createEpicMiddleware({
		dependencies: {
			api
		}
	});

	const store = createStore(
		rootReducer,
		composeWithDevTools(),
		applyMiddleware(epicMiddleware),
		initialState
	);

	epicMiddleware.run(appEpic);

	return store;
}
