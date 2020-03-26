import React, { Component } from "react";
//import { Link } from "react-router-dom";
import './../layout/Navbar.css';
//import axios from 'axios';

class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lastname: '',
      email: '',
      password: '',
      password2: '',

    };
  }
handleInputChange = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

handleSubmit = e => {
  e.preventDefault();
  if (this.state.name.trim() && this.state.password.trim()) {
    this.props.onAddUser(this.state);
    this.handleReset();
  }
};

handleReset = () => {
  this.setState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    password2: ''
  });
};



render() {

return (
  <form onSubmit={ this.handleSubmit } >
      <h3>Signup</h3>

      <div className="form-group">
          <label>First name</label>
          <input type="text" className="form-control" placeholder="First name" name="name" onChange={ this.handleInputChange } value={ this.state.name } />
      </div>

      <div className="form-group">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" name="lastname" onChange={ this.handleInputChange } value={ this.state.lastname }/>
      </div>

      <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={ this.handleInputChange } value={ this.state.email } />
      </div>

      <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={ this.handleInputChange } value={ this.state.password } />
      </div>

      <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Re-Enter password" name="password2" onChange={ this.handleInputChange } value={ this.state.password2 } />
      </div>
      <div className="form-group">
      <button type="submit" className="btn btn-primary mb-2">Sign Up</button>
      </div>
      <p className="forgot-password text-right">
          Already registered sign in?
      </p>
  </form>
    );
  }
}
export default AddUser;
