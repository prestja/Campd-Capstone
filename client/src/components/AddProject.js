// AddProject.js

import React from 'react';
import './layout/Style.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Tags2 } from './Tags2';
//import ImageUpload from './layout/Image'
import { Box, Text, FormControl, FormLabel, Input, Select, FormHelperText, Button, Link, Textarea } from '@chakra-ui/core'

class AddProject extends React.Component {
  /* Project state is initialized, filling in owner details based on the user
    submitting the project, and with a status defaulting to proposal. */
  state = {
    name: '',
    owner: (this.props.auth.user.name + " " + this.props.auth.user.lastname),
    ownerID: this.props.auth.user.id,
    status: 'proposal',
    description: '',
    tags: '',
    file: ''
  };

  /* Whenever one of the fields is adjusted, its state entry is changed to match. */
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  /* As above, for the drop-down menu. */
  handleSelectChange = e => {
    this.setState({
      status: e.target.value
    });
  };

  handleTagChange = (tag) => {
    this.setState({
      tags: tag.map((i) => (i.text))
    });
  }

  /* When the user clicks submit, any excess whitespace is removed and the
      project is submitted to the database. The page state is then reverted.
      TODO - This currently refreshes the page on submit, but it would probably
      be more understandable for the user if it sent them to the new project's
      details page, or to the project list.*/
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    if (this.state.name.trim() && this.state.description.trim()) {
      this.props.onAddProject(this.state);
      this.handleReset();
      window.location.reload();
    }
  };

  handleReset = () => {
    this.setState({
      name: '',
      owner: '',
      ownerID: '',
      status: '',
      description: '',
      tags: '',
      file: ''
    });
  };


  render() {
    //const {user} = this.props.auth;
    return (
      <Box paddingX="10px">
        <FormControl width="75%" bg="#F3F3F3" borderRadius="lg" boxShadow="md" paddingX="10px" paddingY="3px">
          <Text paddingTop="5px">Add a new project:</Text>

          {/*Label and text input for project name. */}
          <FormLabel>Project Name</FormLabel>
          <Input type="name" id="name" name="name" placeholder="Project Name Here" onChange={this.handleInputChange}/>

          {/*Label and drop-down box for project status.
              TODO this should really only be available to admins,
              if even that. Project status is already forced to start
              as proposal, but accessing the dropdown allows for it to be
              overridden.

          if not admin:
            <Text paddingTop="2rem">Warning: New projects are required to be verified by a website administrator before they become visible!</Text>

          if admin:
          */}
          <FormLabel>Project Status</FormLabel>
          <Select id="status" required={true} onChange={this.handleSelectChange}>
            <option value="new">New</option>
            <option value="recruiting">Recruiting</option>
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="stopped">Stopped</option>
            <option value="archived">Archived</option>
          </Select>

          {/*Label and text input for staff working on the project. TODO this data is not implemented. */}
          <FormLabel>Project Staff</FormLabel>
          <Input type="staff" id="staff" placeholder="Project Staff Here" onChange={this.handleInputChange}/>
          <FormHelperText id="email-helper-text">
            For readability, we recommend separating names with commas.
          </FormHelperText>

          {/*Label and text input for the project's description. Uses Textarea instead of Input for multi-line box. */}
          <FormLabel>Project Description</FormLabel>
          <Textarea type="description" id="description" size="sm" height="10rem" placeholder="Project Description Here" onChange={this.handleSelectChange}/>

          <div className="form-group">
            <div className="col-7">
              <label>Tags</label>

              <Tags2 className="form-control" id="tags" name="tags" tags={this.handleTagChange} value={ this.state.tags }/>

            </div>
          </div>

          {/*Image attachment for the project. */}
          <div className="form-group">
            <div className="col-7">
              <label>File Attachment</label>
              <input type="file" className="form-control-file" id="attachment" name="file" onChange={ this.handleInputChange }
                value={ this.state.file }/>
            </div>
          </div>

          {/*Buttons. */}
          <div className="form-group">
            {/*Submit button, fires off the handleSubmit() function above. */}
            <Button bg="untgreen" color="#FFFFFF" onClick={this.handleSubmit}>Submit</Button>
            {/*Cancel button, actually a link that connects back to the project list
                page at /src/components/layout/projects.js */}
            <Button bg="untgreen"><Link color="#FFFFFF" href={"/projects"}>Cancel</Link></Button>
          </div>
        </FormControl>
      </Box>
    );
  }
}

AddProject.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps
)(AddProject);
