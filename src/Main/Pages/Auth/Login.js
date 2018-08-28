import React, { Component } from "react";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";
import { login, signup   } from "../Auth/services";

export class Auth extends Component {
    state = {
        email: '',
        password: ''
    };

    handleFormFieldChange = (field, e) => {
        this.setState({
            [field]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.login(this.state.email, this.state.password);
    };

    render(){
        return (
            <div className='container'>
                <form className='form-holder'>
                    <div className="input-holder">
                        <label htmlFor="email" >E-mail*</label>
                        <input id="email" type="mail"/>
                    </div>
                    <div className="input-holder">
                        <label htmlFor="password">Password*</label>
                        <input id="password" type="password"/>
                    </div>
                    <button>Log In</button>
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}

Auth.propTypes = {

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