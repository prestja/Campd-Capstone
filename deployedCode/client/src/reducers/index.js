// index.js

import { combineReducers } from 'redux';
import projects from './projectReducer';
import users from './userReducer'

export default combineReducers({
    projects: projects,
    users: users
});
