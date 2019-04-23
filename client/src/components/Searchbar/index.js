import React from "react";

function Searchbar() {
  return (
    // <div className="jumbotron jumbotron-fluidsearch" id="search-jumbo">
    <div >
      {/* id = "SearchBar">  */}
      <div >
      {/* className="container"> */}
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

export default Searchbar;
