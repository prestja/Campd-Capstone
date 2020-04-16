import { connect } from 'react-redux';
import { createUser } from '../actions';
import AddUser from '../components/auth/AddUser';

const mapDispatchToProps = dispatch => {
  return {
    onAddUser: user => {
      dispatch(createUser(user));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddUser);
