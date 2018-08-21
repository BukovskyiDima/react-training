import { applyMiddleware, createStore } from 'redux';
import rootReducer from "../reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { homeEpic } from "../Main/Pages/Home/services/";
import { randomEpic } from '../Main/Pages/Random/services'

const epicMiddleware = createEpicMiddleware();
const appEpic = combineEpics(homeEpic, randomEpic);

export default function (initialState) {

	const store = createStore(
		rootReducer,
		composeWithDevTools(),
		applyMiddleware(thunk, epicMiddleware),
		initialState
	);

	epicMiddleware.run(appEpic);

	return store;
}
