import React, { Component } from 'react';

class Search extends Component {
  render() {
      return(
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search for a project..."
              />
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-primary waves-effect waves-light hoverable red accent-3"
                >
                  Search
                </button>
              </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Search;
