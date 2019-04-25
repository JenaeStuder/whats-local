import React, { Component } from "react";

// onSubmit = e => {
//   e.preventDefault();
//   const findArtist = {
//     searchName: this.state.searchName
//   };
// };
class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      searchName: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const findArtist = {
      searchName: this.state.searchName
    };
    console.log(findArtist);
  };

  render() {
    return (
      <div>
        <form noValidate onSubmit={this.onSubmit}>
          <div className="input-group">
            <input
              onChange={this.onChange}
              type="text"
              value={this.state.searchName}
              className="form-control"
              placeholder="Search your area..."
            />
            <span className="input-group-btn">
              <button className="btn btn-light" type="submit">
                <i className="fa fa-search fa-fw" />
              </button>
            </span>
          </div>
        </form>
      </div >
    )
  }
}

export default Searchbar;
