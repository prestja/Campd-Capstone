// EditProject.js

import React from 'react';
import './layout/Style.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateProject } from '../actions';
import { Link, Box, Select, Button, Option, Text, FormControl, FormLabel, FormHelperText, Input, Textarea } from "@chakra-ui/core";
import { GrUserAdd, GrAddCircle, GrPlay, GrPause, GrStop, GrEject } from "react-icons/gr";

class UpdateProject extends React.Component {    
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

    handleInputChange = e => {    
        this.setState({
            project: {
                [e.target.name]: e.target.value
            }
        });
    };

    handleSelectChange = e => {
        this.setState({
            ...this.state,
            project : {
                ...this.state.project,
                status: e.target.value
            }
        });
    };
    
    handleSubmit = e => {
        e.preventDefault();
        if (this.state.project.name == '') {this.setState({project: {name: this.state.originalProject.name}})}
        if (this.state.project.description == '') {this.setState({project: {description: this.state.originalProject.description}})}
        this.props.onUpdateProject(this.state.project);
    };
    
    handleReset = () => {
        this.setState({
            name: '',
            owner: '',
            ownerID: '',
            status: '',
            description: '',
            link: ''
        });
    };
    
    render() {
        const {user} = this.props.auth;
        return (
            <Box paddingX="10px">
                <Text paddingTop="5px">Edit an existing project:</Text>
                <FormControl width="75%" bg="#F3F3F3" borderRadius="lg" boxShadow="md" paddingX="10px" paddingY="3px">
                    <FormLabel>Project Name</FormLabel>
                    <Input type="name" id="name" name="name" placeholder={this.state.originalProject.name} onChange={this.handleInputChange}/>

                    {/*if not admin:
                        <Text paddingTop="2rem">Warning: Changing this project will require an admin to re-verify it!</Text>

                    if admin:
                    */}
                    <FormLabel>Project Status</FormLabel>
                    <Select id="status" required={true} placeholder={this.state.originalProject.status} onChange={this.handleSelectChange}>
                        <option value="new">New</option>
                        <option value="recruiting">Recruiting</option>
                        <option value="active">Active</option>
                        <option value="paused">Paused</option>
                        <option value="stopped">Stopped</option>
                        <option value="archived">Archived</option>
                    </Select>

                    <FormLabel>Project Staff</FormLabel>
                    <Input type="staff" id="staff" placeholder={this.state.originalProject.staff} onChange={this.handleInputChange}/>
                    <FormHelperText id="email-helper-text">
                        For readability, we recommend separating names with commas.
                    </FormHelperText>

                    <FormLabel>Project Description</FormLabel>
                    {this.state.originalProject.description != "" ? <Textarea type="description" id="description" size="sm" height="10rem" placeholder={this.state.originalProject.description} onChange={this.handleSelectChange}/> : null}

                    <div className="form-group">
                        <div className="col-7">
                            <label>File Attachment</label>
                            <input type="file" className="form-control-file" id="attachment" name="file" onChange={ this.handleInputChange }
                                value={ this.state.link }/>
                        </div>
                    </div>

                    <div className="form-group">
                        <Button bg="untgreen" color="#FFFFFF" onClick={this.handleSubmit}>Submit</Button>
                        <Button bg="untgreen">
                        <Link color="#FFFFFF" href={"/project/"+this.props.id}>Cancel</Link></Button>
                        <Button onClick={() => this.testprint()}/>
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
