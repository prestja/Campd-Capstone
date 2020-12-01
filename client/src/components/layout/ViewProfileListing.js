// Listing.js

import React from 'react';
import './Style.css';
import { Link } from "react-router-dom";
import ImageUpload from './Image';


// TODO: I'm fairly certain this is a legacy file that does nothing, but I'm not SURE.

export default ({ project: { name, owner, status, description, file, _id }, onDelete, onView }) => {








  return (
    <div >
      <h2>{ name }</h2>
      <h5>{ owner }</h5>
      <div >
      <p>{ description }</p>
      </div>
      <p>Status: { status }</p>


      <button
        className="btn btn-primary mb-2"

      >
      <ImageUpload id={_id} name={name} owner={owner} status={status} description={description}></ImageUpload>
      <Link onClick={() => onView("")} className="link" to="/profile"> Return to Profile Page </Link>
      </button>


    </div>
  );
};
