import { connect } from 'react-redux';
import { ImageProject } from '../actions';
import ImageProject from '../components/Image';



const mapDispatchToProps = dispatch => {
    return {
        onImageProject: project => {
        dispatch(ImageProject(project));
      }
    };
  };

  export default connect(
    null,
    mapDispatchToProps
  )(ImageProject);
