import React, { Component } from "react";
import { Redirect } from 'react-router';
import API from "../../utils/API";

// onSubmit = e => {
//   e.preventDefault();
//   const findArtist = {
//     searchName: this.state.searchName
//   };
// };
class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      searchName: '',
    };
    // this.submit = this.submit.on(this);
    // this.changeTerm = this.changeTerm.on(this);
  }

  // componentWillReceiveProps() {
  //     this.props.history.push("/results"); // push user to dashboard when they login
  // }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    API.searchArtist(this.state.searchName)
  }

  render() {
    return (
      <div>
        <form noValidate onSubmit={this.onSubmit}>
          <div className="input-group">
            <input
              onChange={this.onChange}
              type="text"
              id="searchName"
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
        {this.state.results.length > 0 &&
          <Redirect to={{
            pathname: '/results',
            state: { results: this.state.results }
          }}/>
        }
      </div >
    )
  }
}

export default Searchbar;
