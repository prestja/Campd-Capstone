import React, {Component} from 'react';
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
    
    onChange = e =>{       
        
        this.setState({file: uploadFile(e.target.files[0],this.props.name)})
        
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
                    <input type="file" accept=".png,.jpg" onChange={this.onChange} />
                    
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
function uploadFile(passFile,fileName) {
  var ex=passFile.name.split('.').pop();
  if(ex===""){
    ex="png";
  }
  console.log("UPLOAD JSON FILE");

    console.log("file changed");
      const formData = new FormData();
      formData.append('file', passFile,fileName+"."+ex);
      const request = new XMLHttpRequest();

      request.responseType = 'json';
      request.onload = () => {
        console.log(request.response);
      };

      request.open('POST', 'http://localhost:5000/projects/image');
      request.send(formData);
  }

export default ImageUpload;

