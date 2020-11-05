import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './Style.css';
import { Menu, MenuButton, MenuItem, MenuList, Button, Box, Stack } from "@chakra-ui/core";
import ListingCompact from "./ListingCompact";
import { fetchAllProjects } from "../../actions"

class ImageUpload extends Component{
    state={ 
        name: this.props.name,
        owner: this.props.owner,
        ownerID: this.props.owner,
        status: '',
        description: this.props.description,
        file: ''
    }

     
    
    onChange = e =>{        
        this.setState({file: uploadJsonFile(e.target.files[0])})
        
    }
    Submit = e =>{
        e.preventDefault();
        console.log(this.state)
        this.props.onUpdateProject(this.state);
    }
    render() {
        return (
          <div className="container">
            <h3>Image Upload</h3>
            <hr/>
            <div className="row">
            <div className="col-md-4 offset-md-4">
            <form Submit={this.Submit}>
                <div className="form-group">
                    <input type="file" onChange={this.onChange} />
                </div>
                <div>
                  <img src={this.state.file}/>
                 </div>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Upload</button>
                </div>
              </form>
            </div>
            </div>
          </div>
        )
      }


}
function uploadJsonFile(TopassFile) {
  console.log("UPLOAD JSON FILE");

  let fileInput = document.createElement('input');
  fileInput.type = 'file';

  fileInput.addEventListener('click', function () {
    console.log("file clicked");
  });

  fileInput.addEventListener('change', function () {
    console.log("file changed");

    console.log("the file input", fileInput);
    const formData = new FormData();
    formData.append('file', TopassFile);
    const request = new XMLHttpRequest();

    request.responseType = 'json';
    request.onload = () => {
      console.log(request.response);
    };

    request.open('POST', 'http://localhost:5000/projects/image');
    request.send(formData);
  });
  fileInput.click();
  return(Date.now() + '-' + TopassFile.originalname);
}

export default ImageUpload;

