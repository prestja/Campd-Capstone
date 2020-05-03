// index.js

import { combineReducers } from 'redux';
import projects from './projectReducer';

import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
    projects: projects,
  
    auth: authReducer,
    errors: errorReducer
});
