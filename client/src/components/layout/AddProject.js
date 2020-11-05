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
            <CreateProject />
            
          </div>
        </div>
      </div>
    );
  }
}

export default AddProject;
