// Listing.js

import React from 'react';
import './Style.css';
import { Link } from "react-router-dom";


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
      <Link onClick={() => onView("")} className="link" to="/projects"> Return to Project List </Link>
      </button>


    </div>
  );
};
