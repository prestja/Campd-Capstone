import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Style.css';



class ViewProject extends Component {
  render() {




    return (
      <div >
        <div >
          <div >
            <h1> Project Name: {this.props.location.name}</h1>
            <h2> Description: </h2>
            <p>{this.props.location.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.projects,
    currentProjects: state.currentProjects
  };
};



export default connect(
  mapStateToProps
)(ViewProject);
