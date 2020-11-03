import React, {Component} from 'react';
import axios from 'axios';
import './Style.css';
class ImageUpload extends Component{
    state={ 
        name: this.props.name,
        owner: this.props.owner,
        ownerID: this.props.owner,
        status: '',
        description: this.props.description,
        file: ''
    }
    setImage(uploadType){
      if(uploadType === "multer"){
        this.setState({
          file: ''
        });
      }
    }


    uploadImage = e =>{
      let ImageForm = new FormData();

      ImageForm.append("imageName", "multer-image-" + this.props.name);
      ImageForm.append("data",e.target.file[0]);

      this.setState({
        file: URL.createObjectURL(e.target.files[0])
      });

    }    




    onChange = e =>{
        this.setState({file: URL.createObjectURL(e.target.files[0])})
    }
    Submit = e =>{
        e.preventDefault();
        console.log(this.state)
        this.props.onImageProject(this.state);
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

export default ImageUpload;