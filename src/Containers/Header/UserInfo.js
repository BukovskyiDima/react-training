import * as React from "react";
import { NavLink } from "react-router-dom";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../Main/Pages/Auth/services";

class UserInfo extends React.Component {
    render() {
        const {loggedIn, user, logout} =  this.props;

        return (
            <React.Fragment>
                {!loggedIn
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
                            <span>{user.email}</span>
                            <a
                                className={"btn"}
                                onClick={logout}
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
    loggedIn: PropTypes.bool,
    user: PropTypes.object,
    logout: PropTypes.func
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