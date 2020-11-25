// EditProject.js

import React from 'react';
import './layout/Style.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateProject } from '../actions';
import { Link, Box, Select, Button, Option, Text, FormControl, FormLabel, FormHelperText, Input } from "@chakra-ui/react";
import { GrUserAdd, GrAddCircle, GrPlay, GrPause, GrStop, GrEject } from "react-icons/gr";

//TODO get the correct image code in and figure out how to bring in the ID/other data.
class UpdateProject extends React.Component {
	state = {
		name: this.props.project.name,
		owner: this.props.project.owner,
		ownerID: '',
		status: this.props.project.status,
		description: this.props.project.description,
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
        if (this.state.name == '') {this.setState({name: this.props.project.name})}
        if (this.state.description == '') {this.setState({description: this.props.project.description})}
        console.log(this.state)
        //if (this.state.name.trim() && this.state.description.trim()) {
            this.props.onUpdateProject(this.state);
            this.handleReset();
        //}
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
            <Box paddingX="10px">
                <Text paddingTop="5px">Edit an existing project:</Text>
                <FormControl width="75%" bg="#F3F3F3" borderRadius="lg" boxShadow="md" paddingX="10px" paddingY="3px">
                    <FormLabel>Project Name</FormLabel>
                    <Input type="name" id="name" name="name" placeholder={this.props.project.name} onChange={this.handleInputChange}/>

                    <FormLabel>Project Status</FormLabel>
                    <Select id="status" required={true} placeholder={this.props.project.status} onChange={this.handleSelectChange}>
                        <option value="new">New</option>
                        <option value="recruiting">Recruiting</option>
                        <option value="active">Active</option>
                        <option value="paused">Paused</option>
                        <option value="stopped">Stopped</option>
                        <option value="archived">Archived</option>
                    </Select>

                    <FormLabel>Project Staff</FormLabel>
                    <Input type="staff" id="staff" placeholder={this.state.staff} onChange={this.handleInputChange}/>
                    <FormHelperText id="email-helper-text">
                        For readability, we recommend separating names with commas.
                    </FormHelperText>

                    <FormLabel>Project Description</FormLabel>
                    <Input type="description" id="description" placeholder={this.state.description} onChange={this.handleSelectChange}/>

                    <div className="form-group">
                        <div className="col-7">
                            <label>File Attachment</label>
                            <input type="file" className="form-control-file" id="attachment" name="file" onChange={ this.handleInputChange }
                                value={ this.state.file }/>
                        </div>
                    </div>

                    <div className="form-group">
                        <Button bg="#00A950" color="#FFFFFF" onClick={this.handleSubmit}>Submit</Button>
                        <Button bg="#00A950">
                        <Link color="#FFFFFF" href={"/project/"+this.props.id}>Cancel</Link></Button>
                    </div>
                </FormControl>

            </Box>
        );
      }
}

UpdateProject.propTypes = {
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  const mapDispatchToProps = dispatch => {
	return {
		onUpdateProject: project => {
			dispatch(updateProject(project));
		}
	}
};
  export default connect(
    mapStateToProps, mapDispatchToProps
  )(UpdateProject);
