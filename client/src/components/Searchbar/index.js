import React, { Component } from "react";
import { Redirect } from 'react-router';
import API from "../../utils/API";
// import { Autocomplete } from 'studio-auto-complete';


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
  redirect(){
    window.location.href="/results";
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    // 
    const searchName = this.state.searchName;
    API.getProfile("5cbfc709d05c151404c087cd")
    .then(res => {
      console.log(res);

      this.setState({
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        socialMediaHandles: res.data.socialMediaHandles,
        bio: res.data.bio,
        profilePicture: res.data.profilePicture,
        mediaClips: res.data.media,
        userName: res.data.username,
        upcoming: ""
      });
      // this.props.history.push(`/results/${searchName}`);
      // this.redirect();
      // <Redirect to={{
      //       pathname: '/results',
      //       state: { results: this.state.results }
      //     }}/>
    })
    .catch(err => console.log(err));
    // API.searchArtist({
    //   searchName: this.state.searchName
    // })
    //   .then(res => <Redirect to={{
    //     pathname: '/results',
    //     state: { results: this.state.results }
    //   }}/>)
    //   .catch(err => console.log(err));
    console.log("clicked");
  }

  render() {
    return (
      <div>
        {/* <Autocomplete
          className="example__autocomplete"
          shouldClearOnExecution={true}
          items={[{ key: "john", name: "John" }, { key: "doe", name: "Doe" }]}
          placeholder={`Search by name`}
          labelAttribute="name"
          searchAttribute="name"
          > */}
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

        {this.state.userName &&
          <Redirect to={{pathname: '/results',
          state: { results: this.state.results }}}/>
        }

      </div >
    )
  }
}

export default Searchbar;
