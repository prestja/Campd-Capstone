import React from 'react';
import { connect } from 'react-redux';
import Project from '../components/layout/Listing';
import { deleteProject } from '../actions';

function ProjectList({ projects, onDelete }) {
  if(!projects.length) {
    return (
      <div>
        No Projects
      </div>
    )
  }
  return (
    <div>
      {projects.map(project => {
        return (
          <Project project={ project } onDelete={ onDelete } key={ project._id } />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    projects: state.projects
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteProject(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList);
