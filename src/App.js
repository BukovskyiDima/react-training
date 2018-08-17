import * as  React from 'react';
import './App.scss';
import Main from './Main';
import { Provider } from "react-redux";
import createStore from "./store/";

const store = createStore();

export default class App extends React.Component {

	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Main/>
				</div>
			</Provider>
		);
	}
}
