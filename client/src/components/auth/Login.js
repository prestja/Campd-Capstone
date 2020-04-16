import React, { Component } from "react";
import './../layout/Navbar.css';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from "classnames"
import { loginUser } from "../../actions/authActions";



//import { Link } from "react-router-dom";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
     this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.auth.isAuthenticated) {
        this.props.history.push("/Profile"); // push user to dashboard when they login
      }
  if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        });
      }
    }


    forceUpdateHandler(){
        this.forceUpdate();
      };

handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };

handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };
handleSubmit = e => {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
    this.handleReset();
console.log(userData);
  };

handleReset = () => {
  this.setState({
    email: '',
    password: ''
  });
};


render() {

  const { errors } = this.state;

  const errorStyle = {
    color: 'red'
  }



return (
  <form noValidate onSubmit={ this.handleSubmit }>
      <h3>Login</h3>

      <div className="form-group">
        <div className="col-7">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" onChange={ this.handleEmailChange } value={ this.state.email }/>
          <span style={errorStyle}>
                  {errors.email}
                  {errors.emailnotfound}
                </span>
        </div>
      </div>

      <div className="form-group">
        <div className="col-7">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" onChange={ this.handlePasswordChange } value={ this.state.password } />
          <span style={errorStyle}>
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
        </div>
      </div>

      <div className="form-group">
          <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
          </div>
      </div>

      <button type="submit" className="btn btn-primary mb-2" onClick={this.forceUpdateHandler}>Submit</button>
      <p className="forgot-password text-right">
          Forgot password?
      </p>
  </form>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
