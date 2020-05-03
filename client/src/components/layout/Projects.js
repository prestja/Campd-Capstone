import React, { Component } from 'react';
import ProjectList from '../../containers/ProjectList';
import ProjectSearch from '../../utils/ProjectSearch';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Projects extends Component {
  render() {
    return (
      <div >
        <div >
          <div >
            <ProjectSearch />
            <ProjectList />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
