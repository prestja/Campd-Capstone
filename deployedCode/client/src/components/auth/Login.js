import React, { Component } from "react";
//import { Link } from "react-router-dom";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }
handleInputChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      email: this.state.email,
      password: this.state.password
    };
console.log(userData);
  };
render() {

return (
  <form>
      <h3>Login</h3>

      <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" onChange={ this.handleInputChange } value={ this.state.email }/>
      </div>

      <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" onChange={ this.handleInputChange } value={ this.state.password } />
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
