import { createStore } from 'redux';
import rootReducer from "../reducer";
import { composeWithDevTools } from "redux-devtools-extension";


export default function (initialState) {
	return createStore(
		rootReducer,
		initialState,
		composeWithDevTools(),
	)
}
