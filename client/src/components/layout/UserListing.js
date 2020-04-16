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

export default ({ user: { name, lastname, email, password, date, _id }, onDelete }) => {
  return (
    <div style={ styles }>
      <h2>{ name }</h2>
      <p>last name: { lastname }</p>
      <p>email: { email }</p>
      <p>password: { password }</p>
      <p>date: { date }</p>
      <button className="btn btn-primary" type="button">
        View
      </button>
      <button className="btn btn-danger" type="button" onClick={() => onDelete(_id)}>
        Remove
      </button>
    </div>
  );
};
