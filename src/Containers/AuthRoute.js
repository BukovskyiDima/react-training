import React , { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";


const AuthRoute = ({component, loggedIn, ...rest}) => (
    <Route {...rest} render = {props => loggedIn
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            from: props.location.pathname
        }}/>
    }/>
);

export default connect(
    (state) => ({
        loggedIn: state.auth.loggedIn
    })
)(AuthRoute);