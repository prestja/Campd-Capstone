import React from 'react';
import { connect } from 'react-redux';
import User from '../components/layout/UserListing';
import { deleteUser } from '../actions';

function UserList({ users, onDelete }) {
  if(!users.length) {
    return (
      <div>
        No Users
      </div>
    )
  }
  return (
    <div>
      {users.map(user => {
        return (
          <User user={ user } onDelete={ onDelete } key={ user._id } />
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteUser(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
