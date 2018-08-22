import * as React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import './Header.scss';

class Header extends React.Component {

	render() {
		return (
			<header id="header">
				<div className="container">
					<strong className="logo">
						<a href="/">
							<img src="./images/logo.png" alt="react-training"/>
						</a>
					</strong>
					<ul className="button-holder">
						<li>
							<NavLink
								className={"btn"}
								activeClassName={'active'}
								exact
								to="/"
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								className={"btn"}
								activeClassName={"active"}
								to="/random"
							>
								Random
							</NavLink>
						</li>
					</ul>
				</div>
			</header>
		)
	}
}

export default withRouter(props => <Header {...props}/>)