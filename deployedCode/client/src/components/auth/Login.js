import React, { Component } from "react";
import './../layout/Navbar.css';

//import { Link } from "react-router-dom";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
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
console.log(userData);
  };

handleReset = () => {
  this.setState({
    email: '',
    password: ''
  });
};


render() {

return (
  <form onSubmit={ this.handleSubmit }>
      <h3>Login</h3>

      <div className="form-group">
        <div className="col-7">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" onChange={ this.handleEmailChange } value={ this.state.email }/>
        </div>
      </div>

      <div className="form-group">
        <div className="col-7">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" onChange={ this.handlePasswordChange } value={ this.state.password } />
        </div>
      </div>

      <div className="form-group">
          <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
          </div>
      </div>

      <button type="submit" className="btn btn-primary mb-2">Submit</button>
      <p className="forgot-password text-right">
          Forgot password?
      </p>
  </form>
    );
  }
}
export default Login;
