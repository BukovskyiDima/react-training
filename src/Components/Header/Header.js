import * as React from 'react';
import {
	Link
} from "react-router-dom";

export default class Header extends React.Component {

	render() {
		return (
			<header id="header">
				<div className="container">
					<ul className="button-holder">
						<li>
							<Link
								className="btn"
								to="/"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								className="btn"
								to="/random"
							>
								Random
							</Link>
						</li>
					</ul>
				</div>
			</header>
		)
	}
}