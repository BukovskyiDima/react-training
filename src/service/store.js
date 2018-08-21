import { createStore, applyMiddleware } from 'redux';
import rootReducer from "../reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";



export default function (initialState) {
	return createStore(
		rootReducer,
		applyMiddleware(thunk),
		initialState,
		composeWithDevTools(),
	)
}
