import React, { Component } from 'react';
import CreateProject from '../../containers/CreateProject';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Style.css';

class AddProject extends Component {
  render() {
    return (
      <div >
        <div >
          <div >
            {/* /src/containers/CreateProject.js is a middleman that establishes a react-redux connect to the actual
							    project submission page body, found at /src/components/AddProject.js */}
            <CreateProject />
          </div>
        </div>
      </div>
    );
  }
}

export default AddProject;
