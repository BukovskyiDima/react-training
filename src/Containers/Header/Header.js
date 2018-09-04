import * as React from 'react';
import { NavLink, withRouter } from "react-router-dom";
import './Header.scss';
import UserInfo from "./UserInfo";

class Header extends React.Component {

    handleBurger = () => {
        document.querySelector('body').classList.toggle('nav-active');
    };

    render() {

        const {location} = this.props;

        return (
            <header id="header">
                <div className="container">
                    <strong className="logo">
                        <a href="/">
                            <img src="./images/logo.png" alt="react-training"/>
                        </a>
                    </strong>
                    <a onClick={this.handleBurger} className="nav-opener"><span> </span></a>
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
                        <UserInfo location={location}/>
                    </ul>
                </div>
            </header>
        )
    }
}

export default withRouter(props => <Header {...props}/>)