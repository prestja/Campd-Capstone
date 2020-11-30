import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Style.css';
import ViewAProfileProject from '../../containers/ViewAProfileProject';


// TODO: I'm fairly certain this is a legacy file that does nothing, but I'm not SURE.

class ViewProfileProject extends Component {



  render() {



    return (
      <div >
        <div >
          <div >
            <ViewAProfileProject />

          </div>
        </div>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    projects: state.projects,
  };
};


export default connect(
  mapStateToProps
)(ViewProfileProject);
