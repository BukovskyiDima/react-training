import { applyMiddleware, createStore } from 'redux';
import rootReducer from "../reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createEpicMiddleware } from "redux-observable";
import { homeEpic } from "../Main/Pages/Home/services/";

const epicMiddleware = createEpicMiddleware();

export default function (initialState) {

	const store = createStore(
		rootReducer,
		composeWithDevTools(),
		applyMiddleware(thunk, epicMiddleware),
		initialState
	);

	epicMiddleware.run(homeEpic);

	return store;
}
