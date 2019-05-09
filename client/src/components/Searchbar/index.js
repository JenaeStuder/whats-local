import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom';
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
      term: '',
    };
    this.submit = this.submit.bind(this);
    this.changeTerm = this.changeTerm.bind(this);
  }

  changeTerm(event) {
    this.setState({term: event.target.value});
  }
  // componentWillReceiveProps() {
  //     this.props.history.push("/results"); // push user to dashboard when they login
  // }
  // redirect(){
  //   window.location.href="/results";
  // }
  // onChange = e => {
  //   this.setState({ [e.target.id]: e.target.value });
  // };

  submit = e => {
    e.preventDefault();
    API.getProfile("5cbfc709d05c151404c087cd")
    .then(response => {
      let data = {
        results: response.data,
      };
      this.setState(data);
      console.log(data);
      this.props.history.push(`/results`);
    })
    .catch(error => console.log(error));
  }


      // this.setState({
      //   firstName: res.data.firstName,
      //   lastName: res.data.lastName,
      //   socialMediaHandles: res.data.socialMediaHandles,
      //   bio: res.data.bio,
      //   profilePicture: res.data.profilePicture,
      //   mediaClips: res.data.media,
      //   userName: res.data.username,
      //   upcoming: ""
      // });
      // this.props.history.push(`/results/${searchName}`);
      // this.redirect();
      // <Redirect to={{
      //       pathname: '/results',
      //       state: { results: this.state.results }
      //     }}/>

    // .catch(err => console.log(err));
    // API.searchArtist({
    //   searchName: this.state.searchName
    // })
    //   .then(res => <Redirect to={{
    //     pathname: '/results',
    //     state: { results: this.state.results }
    //   }}/>)
    //   .catch(err => console.log(err));
    // console.log("clicked");
  

  render() {
    return (
      <div>
        <form noValidate onSubmit={this.submit}>
          <div className="input-group">
            <input
              onChange={this.changeTerm}
              type="text"
              // id="searchName"
              // value={this.state.searchName}
              className="form-control"
              placeholder="Search your area..."
            />
            <span className="input-group-btn">
              <button className="btn btn-light" type="submit">
                <i className="fa fa-search fa-fw"/>
              </button>
            </span>
          </div>
        </form>
        {/* {this.state.results.length > 0 &&
          <Redirect to={{
            pathname: '/results',
            state: { results: this.state.results }
          }}/>
        } */}
      </div >
    );
  }
}

export default Searchbar;
