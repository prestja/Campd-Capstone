// index.js

import { combineReducers } from 'redux';
import projects from './projectReducer';
import users from './userReducer'
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    projects: projects,
    users: users,
    auth: authReducer,
    errors: errorReducer
});
