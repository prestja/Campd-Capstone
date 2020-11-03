// EditProject.js

import React from 'react';
import './layout/Style.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, Box, Select, Option, Text, FormControl, FormLabel, FormHelperText, Input } from "@chakra-ui/core";
import { GrUserAdd, GrAddCircle, GrPlay, GrPause, GrStop, GrEject } from "react-icons/gr";

//TODO
class EditProject extends React.Component {
	state = {
		name: '',
		owner: '',
		ownerID: '',
		status: '',
		description: '',
		file: '',
    };
    
    testprint(e) {
		console.log(e);
	};

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSelectChange = e => {
        this.setState({
            status: e.target.value
        });
    };
    
    
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        if (this.state.name.trim() && this.state.description.trim()) {
            this.props.onUpdateProject(this.state);
            this.handleReset();
        }
    };
    
    handleReset = () => {
        this.setState({
            name: '',
            owner: '',
            ownerID: '',
            status: '',
            description: '',
            file: ''
        });
    };
    
    
    
    render() {
        const {user} = this.props.auth;
        return (
            <Box>
                <Text>Edit an existing project:</Text>
                <FormControl>
                    <FormLabel>Project Name</FormLabel>
                    <Input type="name" id="name" value={this.state.name} onChange={this.handleInputChange}/>

                    <FormLabel>Project Status</FormLabel>
                    <Select id="status" required={true} value={this.state.status} onChange={this.handleSelectChange}>
                        <option value="new">New</option>
                        <option value="recruiting">Recruiting</option>
                        <option value="active">Active</option>
                        <option value="paused">Paused</option>
                        <option value="stopped">Stopped</option>
                        <option value="archived">Archived</option>
                    </Select>

                    <FormLabel>Project Staff</FormLabel>
                    <Input type="staff" id="staff" value={this.state.staff} onChange={this.handleInputChange}/>
                    <FormHelperText id="email-helper-text">
                        For readability, we recommend separating names with commas.
                    </FormHelperText>

                    <FormLabel>Project Description</FormLabel>
                    <Input type="description" id="description" value={this.state.description} onChange={this.handleSelectChange}/>

                    <div className="form-group">
                        <div className="col-7">
                            <label>File Attachment</label>
                            <input type="file" className="form-control-file" id="attachment" name="file" onChange={ this.handleInputChange }
                                value={ this.state.file }/>
                        </div>
                    </div>
                </FormControl>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" onClick={() => this.testprint(this)}>Submit</button>
                        <button type="button" className="btn btn-warning">
                        <Link color="#000000" href={"/project/"+this.props.id}>Cancel</Link></button>
                    </div>
            </Box>
        );
      }
}

EditProject.propTypes = {
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps
  )(EditProject);