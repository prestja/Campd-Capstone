import React, { Component } from 'react';
import CreateProject from '../../containers/CreateProject';
import ProjectList from '../../containers/ProjectList';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

class AddProject extends Component {
  render() {
    return (
      <div >
        <div >
          <div >
            <CreateProject />
          </div>
        </div>
      </div>
    );
  }
}

export default AddProject;
