import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import './../layout/Style.css';
//import axios from 'axios';
//import UserList from '../../containers/UserList'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser } from "../../actions/authActions";
import { Box, FormLabel, FormControl, Text, Input, Link, Button } from '@chakra-ui/core'


/*TODO - most likely, this entire section will need to be redone. We were never able to get a
    UNT server up and running, which means we were never able to get any access to the EUID
    system - which was, unfortunately, one of our primary goals for the project. This code was
    here when we started on the project, and aside from a graphical overhaul/some cleanup and
    adding comments, it hasn't been modified by us.*/


class AddUser extends Component {
  //Constructor to initialize the state and prevent any null reference errors from occuring
  constructor() {
    super();
    this.state = {
      name: '',
      lastname: '',
      email: '',
      password: '',
      password2: '',
      errors: {}

    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  /*Function that updates page's state accordingly when any of the fields are changed. */
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  /*On form submission, creates a user entry from the provided details and tells the database to register it, and then returns the page state to its original parameters.*/
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.name.trim() && this.state.password.trim()) {
      this.state.password2.trim()
      //this.props.onAddUser(this.state);
      const newUser = {
        name: this.state.name,
        lastname: this.state.lastname,
        email: this.state.email,
        password: this.state.password,
        password2: this.state.password2
      };
      this.props.registerUser(newUser, this.props.history);
      //this.handleReset();
      this.setState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        password2: ''
      });
    }
  };

  //handleReset = () => {
  //  this.setState({
  //    name: '',
  //    lastname: '',
  //    email: '',
  //    password: '',
  //    password2: ''
  //  });
  //};



  render() {
    //Definition of variables for error message construction.
    const { errors } = this.state
    const errorStyle = {color: 'red'}

    return (
      <Box paddingLeft="1rem" paddingTop="1rem">
        <form noValidate onSubmit={ this.handleSubmit } >
          {/* Textbox above the form that functions as a page title. */}
          <Text bg="#EEEEEE" borderRadius="lg" boxShadow="lg" fontSize="xl" paddingLeft="1rem">Sign up</Text>
          {/* Body of the form starts here */}
          <FormControl width="75%" bg="#F3F3F3" borderRadius="lg" boxShadow="md" paddingX="10px" paddingY="3px">
            {/* Label and input box for first name */}
            <div className="form-group">
              <div className="col-7">
                <FormLabel>First name</FormLabel>
                <Input type="text" className="form-control" placeholder="First name" name="name" onChange={ this.handleInputChange } value={ this.state.name } error={errors.name}/>
                <span style={errorStyle}>{errors.name}</span>
              </div>
            </div>

            {/* Label and input box for last name */}
            <div className="form-group">
              <div className="col-7">
                <FormLabel>Last name</FormLabel>
                <Input type="text" className="form-control" placeholder="Last name" name="lastname" onChange={ this.handleInputChange } value={ this.state.lastname } error={errors.lastname}/>
                <span style={errorStyle}>{errors.lastname}</span>
              </div>
            </div>

            {/* Label and input box for email being registered */}
            <div className="form-group">
              <div className="col-7">
                <FormLabel>Email address</FormLabel>
                <Input type="email" className="form-control" placeholder="Enter email" name="email" onChange={ this.handleInputChange } value={ this.state.email } error={errors.email} />
                <span style={errorStyle}>{errors.email}</span>
              </div>
            </div>

            {/* Label and input box for the new password */}
            <div className="form-group">
              <div className="col-7">
                <FormLabel>Password</FormLabel>
                <Input type="password" className="form-control" placeholder="Enter password" name="password" onChange={ this.handleInputChange } value={ this.state.password } error={errors.password}  />
                <span style={errorStyle}>{errors.password}</span>
              </div>
            </div>

            {/* Label and input box for confirming the new password */}
            <div className="form-group">
              <div className="col-7">
                <FormLabel>Confirm Password</FormLabel>
                <Input type="password" className="form-control" placeholder="Re-Enter password" name="password2" onChange={ this.handleInputChange } value={ this.state.password2 } error={errors.password2}/>
                <span style={errorStyle}>{errors.password2}</span>
              </div>
            </div>

            {/* Button to submit the registration details */}
            <div className="form-group">
            <Button bg="untgreen" type="submit" className="btn btn-primary mb-2">Sign Up</Button>
            </div>

            {/* Link that directs to the login page /src/components/auth/login.js */}
            <p className="forgot-password text-left">
                Already registered? <Link color="#007700" href="/login">Sign in</Link>
            </p>
          </FormControl>
        </form>
      </Box>
    );
  }
}

AddUser.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});


export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(AddUser));
