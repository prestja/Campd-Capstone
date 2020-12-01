import React, { Component } from "react";
import './../layout/Style.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from "../../actions/authActions";
import { Box, Text, Input, FormControl, FormLabel, Button, Link } from '@chakra-ui/core';


/*TODO - most likely, this entire section will need to be redone. We were never able to get a
    UNT server up and running, which means we were never able to get any access to the EUID
    system - which was, unfortunately, one of our primary goals for the project. This code was
    here when we started on the project, and aside from a graphical overhaul/some cleanup and
    adding comments, it hasn't been modified by us.*/


class Login extends Component {
  //Constructor to initialize the state and prevent any null reference errors from occuring
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
     this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/Profile"); // push user to dashboard when they login
    }
    window.location.reload(false);
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  forceUpdateHandler(){
    this.forceUpdate();
  };

  /*Functions that update page's state accordingly when the fields for email or password are changed. */
  handleEmailChange = e => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  };

  /*On form submission, attempts to log the user in with the provided details, and returns the page state to its original parameters. */
  handleSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
    this.setState({
      email: '',
      password: ''
    });
    //console.log(userData);
  };


  render() {
    //Definition of variables for error message construction.
    const { errors } = this.state;
    const errorStyle = {color: 'red'}

    return (
      <Box paddingLeft="1rem" paddingTop="1rem">
        <form noValidate onSubmit={ this.handleSubmit }>
          {/* Textbox above the form that functions as a page title. */}
          <Text bg="#EEEEEE" borderRadius="lg" boxShadow="lg" fontSize="xl" paddingLeft="1rem">Login</Text>
          {/* Body of the form starts here */}
          <FormControl width="75%" bg="#F3F3F3" borderRadius="lg" boxShadow="md" paddingX="10px" paddingY="3px">
            {/* Label and input box for login email. */}
            <div className="form-group">
              <div className="col-7">
                <FormLabel>Email address</FormLabel>
                <Input type="email" className="form-control" placeholder="Enter email" onChange={ this.handleEmailChange } value={ this.state.email }/>
                <span style={errorStyle}>
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
            </div>

            {/* Label and input box for password. */}
            <div className="form-group">
              <div className="col-7">
                <FormLabel>Password</FormLabel>
                <Input type="password" className="form-control" placeholder="Enter password" onChange={ this.handlePasswordChange } value={ this.state.password } />
                <span style={errorStyle}>
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
            </div>

            {/* Checkbox to stay logged in. TODO I'm fairly certain this just does nothing. */}
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
                  <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            {/* Button to submit the login details */}
            <Button bg="untgreen" type="submit" className="btn btn-primary mb-2" onClick={this.forceUpdateHandler}>Submit</Button>

            {/* Link that directs to the sign-in page /src/components/auth/adduser.js */}
            <p className="forgot-password text-left">
                Need an account? <Link color="#007700" href="/signup">Sign up</Link>
            </p>
          </FormControl>
        </form>
      </Box>
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
