import * as React from 'react';
import {
	BrowserRouter as Router,
	Route
} from "react-router-dom";
import * as Page from './Pages/index';
import Header from '../Components/Header/Header';

export default class Main extends React.Component {

	render() {
		return (
			<Router>
				<div>
					<Header />
					<Route exact path="/" component={Page.Home}/>
					<Route path="/about" component={Page.Random}/>
				</div>
			</Router>
		)
	}
}