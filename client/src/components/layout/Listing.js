// Listing.js

import React from 'react';
import './Style.css';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '800px',
  borderRadius: '7px'
};

export default ({ project: { name, owner, status, description, file, _id }, onDelete }) => {
  return (
    <div style={ styles }>
      <h2>{ name }</h2>
      <h5>{ owner }</h5>
      <p class="overflow-ellipsis">{ description }</p>
      <p>Status: { status }</p>
      <button className="btn btn-primary" type="button">
        View
      </button>
      <button className="btn btn-danger" type="button" onClick={() => onDelete(_id)}>
        Remove
      </button>
    </div>
  );
};
