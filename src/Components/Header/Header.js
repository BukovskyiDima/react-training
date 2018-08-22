import * as React from 'react';
import { NavLink, withRouter } from "react-router-dom";

class Header extends React.Component {

	render() {
		return (
			<header id="header">
				<div className="container">
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
								activeClassName={'active'}
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