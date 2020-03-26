// Listing.js

import React from 'react';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};

export default ({ project: { name, owner, status, description, file, _id }, onDelete }) => {
  return (
    <div style={ styles }>
      <h2>{ name }</h2>
      <p>owner: { owner }</p>
      <p>status: { status }</p>
      <p>Desc: { description }</p>
      <p>file: { file }</p>
      <button className="btn btn-primary" type="button">
        View
      </button>
      <button className="btn btn-danger" type="button" onClick={() => onDelete(_id)}>
        Remove
      </button>
    </div>
  );
};
