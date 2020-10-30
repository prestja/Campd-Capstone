import { connect } from 'react-redux';
import { updateProject } from '../actions';
import updateProject from '../components/Image';


const mapDispatchToProps = dispatch => {
    return {
        onUpdateProject: project => {
        dispatch(updateProject(project));
      }
    };
  };
  
  export default connect(
    null,
    mapDispatchToProps
  )(UpdateProject);
  