import React from "react";

function Navbar() {
  return (
    <div className="jumbotron jumbotron-fluid" id="search-jumbo">
      <div className="container">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search your area..."
          />
          <span className="input-group-btn">
            <button className="btn btn-light" type="button">
              <i className="fa fa-search fa-fw" />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
