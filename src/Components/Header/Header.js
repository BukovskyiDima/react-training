import * as React from 'react';
import {
	Link,
	withRouter
} from "react-router-dom";

class Header extends React.Component {

	render() {
		return (
			<header id="header">
				<div className="container">
					<ul className="button-holder">
						<li>
							<Link
								className={ "btn" + (this.props.location.pathname === '/' ? ' active' : '')}
								to="/"
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								className={ "btn" + (this.props.location.pathname === '/random' ? ' active' : '')}
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

export default withRouter(props => <Header {...props}/>)