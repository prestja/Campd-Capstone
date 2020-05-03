import React, { Component } from 'react';

//test
import AddUser from '../auth/AddUser'

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Signup extends Component {
  render() {
    return (
      <div >
        <div >
          <div >
            <AddUser />
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
