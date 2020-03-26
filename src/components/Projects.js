import React, { Component } from "react";

import Login from './Login';
import Signup from './Signup';

export default class Projects extends Component {
    render() {
        return (
          <div>
          <div class="topnav">
            <a href="/">Home</a>
            <a href="/sign-in">Login {Login}</a>
            <a href="/sign-up">Sign up {Signup}</a>
            <a class="active" href="/projects">Projects {Projects}</a>
          </div>

          <form>
            <h3>Add a project</h3>

            <div className="form-group">
              <div class="col-7">
                <label>Project Name</label>
                <input type="name" className="form-control" placeholder="Enter project name" />
              </div>
            </div>

            <div className="form-group">
              <div class="col-7">
                <label>Owner</label>
                <input type="owner" className="form-control" placeholder="Add owner name" />
              </div>
            </div>

            <div className="form-group">
              <div class="col-7">
                <label>Status</label>
                <select class="form-control" id="statu">
                  <option>Active</option>
                  <option>Complete</option>
                  </select>
              </div>
            </div>

            <div class="form-group">
              <div class="col-7">
                <label>Description</label>
                <textarea class="form-control" id="description" rows="3"></textarea>
              </div>
            </div>

            <div class="form-group">
              <div class="col-7">
                <label>File Attachment</label>
                <input type="file" class="form-control-file" id="attachment"/>
              </div>
            </div>

          <button type="submit" className="btn btn-primary mb-2">Submit</button>

          </form>

          </div>
        );
    }
}
