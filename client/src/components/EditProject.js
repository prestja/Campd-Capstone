// EditProject.js

import React from 'react';
import './layout/Style.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateProject } from '../actions';
import { Link, Box, Select, Button, Text, FormControl, FormLabel, FormHelperText, Input, Textarea } from "@chakra-ui/core";

class UpdateProject extends React.Component {    
    /*When the page is rendered, a database query is sent to get the project data, and the result is loaded into the page's data.*/
    componentDidMount() {
        fetch("http://127.0.0.1:5000/projects/" + this.props.id)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState ( 
                {
                    project: result,
                    originalProject: result
                });
            },
            (error) => {}
        );
    };

    /*This constructor exists only to stop errors from occuring because of state 
        not being explicitly declared. By the time the user is able to do anything,
        these empty states should already be replaced by the state assigned by the code above.*/
    constructor(props) {
        super(props);
        this.state = { 
            project: {
                _id: "",
                name: "",
                owner: "",
                ownerID: "",
                status: "",
                description: "",
                link: "",
            },
            originalProject: {
                _id: "",
                name: "",
                owner: "",
                ownerID: "",
                status: "",
                description: "",
                link: "",
            }
        }
    }

    /* Whenever one of the fields is adjusted, its state.project entry is changed to match. */
    handleInputChange = e => {    
        this.setState({
            ...this.state,
            project: {
                ...this.state.project,
                [e.target.name]: e.target.value
            }
        });
    };

    /* As above, but for the dropdown menu which lets the user change the status. */
    handleSelectChange = e => {
        this.setState({
            ...this.state,
            project : {
                ...this.state.project,
                status: e.target.value
            }
        });
    };
    
    /* When the user clicks submit - if the name or description fields are empty, they are forced
        back to their original states before the update command is sent. TODO implement these for
        other data fields as they are added to the system. Also TODO - This currently refreshes the
        page upon submit, but it would probably be more user-friendly to find a way to push the user
        back to either project details or the project list. */
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.project.name === "") {this.setState({project: {name: this.state.originalProject.name}})}
        if (this.state.project.description === "") {this.setState({project: {description: this.state.originalProject.description}})}
        this.props.onUpdateProject(this.state.project)
        window.location.reload();
    };
    
    render() {
        //const {user} = this.props.auth;
        return (
            <Box paddingX="10px">
                <FormControl width="75%" bg="#F3F3F3" borderRadius="lg" boxShadow="md" paddingX="10px" paddingY="3px">
                    <Text paddingTop="5px">Edit an existing project: (Leave fields empty if you want to leave them unchanged!)</Text>
                    
                    {/*Label and text input for project name. */}
                    <FormLabel>Project Name</FormLabel>
                    <Input type="name" id="name" name="name" placeholder={this.state.originalProject.name} onChange={this.handleInputChange}/>

                    {/*Label and drop-down box for project status. 
                        TODO this should have authentication protection, and force the project status to be proposal if the user isn't an admin
                    
                    if not admin:
                        <Text paddingTop="2rem">Warning: Changing this project will require an admin to re-verify it!</Text>

                    if admin:
                    */}
                    <FormLabel>Project Status</FormLabel>
                    {/*TODO the placeholder is, somehow, overridden by the New option here. The internal state remains accurate, but this would
                        at the very least be confusing. */}
                    <Select id="status" required={true} placeholder={this.state.originalProject.status} onChange={this.handleSelectChange}>
                        <option value="new">New</option>
                        <option value="recruiting">Recruiting</option>
                        <option value="active">Active</option>
                        <option value="paused">Paused</option>
                        <option value="stopped">Stopped</option>
                        <option value="archived">Archived</option>
                    </Select>

                    {/*Label and text input for staff working on the project. TODO this data is not implemented. */}
                    <FormLabel>Project Staff</FormLabel>
                    <Input type="staff" id="staff" placeholder={this.state.originalProject.staff} onChange={this.handleInputChange}/>
                    <FormHelperText id="email-helper-text">
                        For readability, we recommend separating names with commas.
                    </FormHelperText>

                    {/*Label and text input for the project's description. Uses Textarea instead of Input to allow for multi-line input. */}
                    <FormLabel>Project Description</FormLabel>
                    {this.state.originalProject.description !== "" ? <Textarea type="description" id="description" size="sm" height="10rem" placeholder={this.state.originalProject.description} onChange={this.handleSelectChange}/> : null}

                    {/*Image attachment for the project. */}
                    <div className="form-group">
                        <div className="col-7">
                            <label>File Attachment</label>
                            <input type="file" className="form-control-file" id="attachment" name="file" onChange={ this.handleInputChange }
                                value={ this.state.link }/>
                        </div>
                    </div>

                    {/*Buttons. */}
                    <div className="form-group">
                        {/*Submit button, fires off the handleSubmit() function above. */}
                        <Button bg="untgreen" color="#FFFFFF" onClick={this.handleSubmit}>Submit</Button>
                        {/*Cancel button, actually a link that connects back to the project details
                            page at /src/components/layout/projectview.js */}
                        <Button bg="untgreen">
                            <Link color="#FFFFFF" href={"/project/"+this.props.id}>Cancel</Link>
                        </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProject);
