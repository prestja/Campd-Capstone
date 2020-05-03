// Listing.js

import React from 'react';
import './Style.css';
import { Link } from "react-router-dom";

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '800px',
  borderRadius: '7px'
};


export default ({ project: { name, owner, status, description, file, _id }, onDelete }) => {



  const newTo ={
    pathname: "/viewproject",
    name: name,
    owner: owner,
    status: status,
    description: description,
    file: file,
    _id: _id
  }




  return (
<<<<<<< HEAD
      <div style={ styles }>
        <h2>{ name }</h2>
        <h5>{ owner }</h5>
        <p className="overflow-ellipsis">{ description }</p>
        <p>Status: { status }</p>
        <button className="btn btn-primary" type="button">
          View
        </button>
        <button className="btn btn-danger" type="button" onClick={() => onDelete(_id)}>
          Remove
        </button>
      </div>
=======
    <div style={ styles }>
      <h2>{ name }</h2>
      <h5>{ owner }</h5>
      <div className="overflow">
      <p className="overflow-ellipsis">{ description }</p>
      </div>
      <p>Status: { status }</p>


      <button className="btn btn-primary" type="button" >
        <Link to={newTo} > View </Link>
      </button>

      <button className="btn btn-danger" type="button" onClick={() => onDelete(_id)}>
        Remove
      </button>
    </div>
>>>>>>> viewingProject
  );
};
