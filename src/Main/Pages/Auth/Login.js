import React, { Component } from "react";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import { login, signup   } from "../Auth/services";
import './Login.scss';

export class Auth extends Component {
    state = {
        email: '',
        password: ''
    };

    handleFormFieldChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.login(this.state.email, this.state.password);
    };

    handleSignUp = () => {
        this.props.signup(this.state.email, this.state.password);
    };

    render(){
        return (
            <div className='container'>
                <form className='login-form'>
                    <div className="input-holder">
                        <label htmlFor="email" >E-mail*</label>
                        <input id="email" name="email" type="email" onChange={this.handleFormFieldChange}/>
                    </div>
                    <div className="input-holder">
                        <label htmlFor="password">Password*</label>
                        <input id="password" name="password" type="password" onChange={this.handleFormFieldChange}/>
                    </div>
                    <div className="input-holder">
                        <button className="btn login" onClick={this.handleSubmit}>Log In</button>
                    </div>
                    <div className="input-holder">
                        <button type="button" className="btn signup"  onClick={this.handleSignUp}>Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
}

Auth.propTypes = {
    login: PropTypes.func,
    signup: PropTypes.func
};

const mapStateToProps = ({}) => ({
});

export default connect(
    mapStateToProps,
    {
        login: login,
        signup: signup,
    }
)(Auth);