import React, { Component } from "react";
import API from "../utils/API";
import ProfilePicture from "../components/ProfilePicture";
import Bio from "../components/Bio";
import MediaClips from "../components/MediaClips";
import Col from "../components/Col";
import Container from "../components/Container";
import Row from "../components/Row";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Update from "../components/Upcoming";
<<<<<<< HEAD
import UpdateItem from "../components/UpdateItem";

class Profile extends Component {
  state = {
    firstName: "",
    lastName: "",
    socialMediaHandles: "",
    bio: "",
    profilePicture: "",
    mediaClips: "",
    upcoming: ""
  };
  componentDidMount() {
    this.loadProfile();
  }

  loadProfile = () => {
    API.getProfile()
      .then(res =>
        this.setState({
          firstName: res.data,
          lastName: "",
          socialMediaHandles: "",
          bio: "",
          profilePicture: "",
          mediaClips: "",
          upcoming: ""
        })
      )
      .catch(err => console.log(err));
  };

  render(props) {
    return (
      <div className="Profile">
        <Container fluid>
          <Searchbar />

          <Row>
            <Col size="md-6">
              <Row>
                <h1>Profile Picture</h1>
                <img>
                  <ProfilePicture image={this.state.profilePicture} />
                </img>
              </Row>
              <Row>
                <h1>Artist Updates</h1>
                {this.state.update.length ? (
                  <Update>
                    {" "}
                    {this.state.update.map(update => (
                      <UpdateItem key={update._id} />
                    ))}
                  </Update>
                ) : (
                  <h2>
                    {" "}
                    {this.state.firstName} doesn't have any updates, check back
                    soon.
                  </h2>
                )}
              </Row>
            </Col>
            <Col size="md-6">
              <Row>
                <h1>Name</h1>
                <h1>
                  {" "}
                  {this.state.firstName}
                  {this.state.lastName}
                </h1>
              </Row>
              <Row>{this.state.socialMediaHandles}</Row>
              <Row>
                <div>
                  <h1>Bio</h1>
                  <Bio bio={this.state.bio} />
                </div>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col size="md-4">
              <div>
                <h1>Media 1</h1>
                <MediaClips media={this.state.mediaClips} />
              </div>
            </Col>
            <Col size="md-4">
              <div>
                <h1>Media 2</h1>
                <MediaClips media={this.state.mediaClips} />
              </div>
            </Col>
            <Col size="md-4">
              <div>
                <h1>Media 3</h1>
                <MediaClips media={this.state.mediaClips} />
              </div>
            </Col>
          </Row>
          <Row>{this.state.socialMediaHandles}</Row>
          <Row>
            <h1>Bio</h1>
            <div>{this.state.bio}</div>
          </Row>
          <Row>
            <Col size="md-4">
              <div>
                <h1>Media 1</h1>
                {this.state.mediaClips}
              </div>
            </Col>
            <Col size="md-4">
              <div>
                <h1>Media 2</h1>
                {this.state.mediaClips}
              </div>
            </Col>
            <Col size="md-4">
              <div>
                <h1>Media 3</h1>
                {this.state.mediaClips}
              </div>
            </Col>
          </Row>

          <Navbar />
        </Container>
      </div>
    );
  }
}
=======
import UpdateItem from "../components/UpdateItem"

class Profile extends Component {



 
  
        
    state = {
        firstName: "",
        lastName: "",
        socialMediaHandles: "",
        bio: "",
        profilePicture: null,
        mediaClips: "",
        upcoming: "",
        loading: true,

    };
    // componentDidMount() {
    //     this.loadProfile();
    // }


    // loadProfile = () => {
    //     API.getProfile().then(res => this.setState({
    //         firstName: res.data,
    //         lastName: "",
    //         socialMediaHandles: "",
    //         bio: "",
    //         profilePicture: "",
    //         mediaClips: "",
    //         upcoming:"",
    // loading: false
    //     })
    //     ).catch(err => console.log(err));
    // };


    render(props) {
        return (
            <div className="Profile">

                <Searchbar />

                {this.state.loading ? <Row>
                    <Col size="md-6">
                        <Row>
                            <h3>Profile Picture</h3>

                            <ProfilePicture image={this.state.profilePicture} />

                        </Row>
                        <Row>
                            <h3>Artist Updates</h3>
                            {this.state.upcoming.length ? (
                                <Update>
                                    {this.state.upcoming.map(update => (
                                        <UpdateItem key={update._id}>
                                        </UpdateItem>
                                    ))}
                                </Update>
                            )
                                : (
                                    <h3> {this.state.firstName} doesn't have any updates, check back soon.</h3>
                                )}

                        </Row>
                    </Col>
                    <Col size="md-6">
                        <Row>
                            <h3>Name</h3>
                            <h3>
                                {this.state.firstName}
                                {this.state.lastName}
                            </h3>
                        </Row>
                        <Row>
                            {this.state.socialMediaHandles}
                        </Row>
                        <Row>
                            <div>
                                <h3>Bio</h3>
                                <Bio bio={this.state.bio}>
                                </Bio>
                            </div>
                        </Row>
                    </Col>
                </Row> : null}

                {this.state.loading ? <Row>
                    <Col size="md-4">
                        <div>
                            <h3>Media 1</h3>
                            <MediaClips media={this.state.mediaClips}>

                            </MediaClips>
                        </div>
                    </Col>
                    <Col size="md-4">
                        <div>
                            <h3>Media 2</h3>
                            <MediaClips media={this.state.mediaClips}>

                            </MediaClips>
                        </div>
                    </Col>
                    <Col size="md-4">
                        <div>
                            <h3>Media 3</h3>
                            <MediaClips media={this.state.mediaClips}>

                            </MediaClips>
                        </div>
                    </Col>
                </Row> : null}

                <Navbar />


            </div>
        );
    }

}





>>>>>>> 7bdf330e0b8a22b3f38b2dfc5e003976707cdedc

export default Profile;
