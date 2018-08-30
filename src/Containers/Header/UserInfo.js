import * as React from "react";
import { NavLink, Link } from "react-router-dom";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../Main/Pages/Auth/services";

class UserInfo extends React.Component {
    render() {
        return (
            <React.Fragment>
                {!this.props.loggedIn
                    ? <li className="user-info" >
                        <NavLink
                            className={"btn"}
                            activeClassName={"active"}
                            to="/login"
                        >
                            Log In
                        </NavLink>
                    </li>
                    :
                    <React.Fragment>
                        <li>
                            <NavLink
                                className={"btn"}
                                activeClassName={"active"}
                                to="/favorite"
                            >
                                Favorite
                            </NavLink>
                        </li>
                        <li className="user-info">
                            <span>{this.props.user.email}</span>
                            <a
                                className={"btn"}
                                onClick={this.props.logout}
                            >
                                Log Out
                            </a>
                        </li>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}

UserInfo.propTypes = {
    loggedIn: PropTypes.bool
};

export default connect(
    (state) => ({
        loggedIn: state.auth.loggedIn,
        user: state.auth.user
    }),
    {
        logout
    }
)(UserInfo);