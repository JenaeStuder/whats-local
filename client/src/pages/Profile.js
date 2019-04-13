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
import UpdateItem from "../components/UpdateItem"

class Profile extends Component {



  state = {
    firstName: "",
    lastName: "",
    socialMediaHandles: "",
    bio: "",
    profilePicture: "",
    mediaClips: "",
    upcoming: "",


  };
  componentDidMount() {
    this.loadProfile();
  }


  loadProfile = () => {
    API.getProfile().then(res => this.setState({
      firstName: res.data,
      lastName: "",
      socialMediaHandles: "",
      bio: "",
      profilePicture: "",
      mediaClips: "",
      upcoming: ""
    })
    ).catch(err => console.log(err));
  };


  render(props) {
    return (
      <div className="Profile">
      
          <Searchbar />

          <Row>
            <Col size="md-6">
              <Row>
                <h1>Profile Picture</h1>
                <img>
                  <ProfilePicture image=
                    {this.state.profilePicture}>
                  </ProfilePicture>
                </img>
              </Row>
              <Row>
                <h1>Artist Updates</h1>
                {this.state.update.length ? (
                  <Update> {this.state.update.map(update => (
                    <UpdateItem key={update._id}>
                    </UpdateItem>
                  ))}
                  </Update>
                ) : (
                    <h2> {this.state.firstName} doesn't have any updates, check back soon.</h2>
                  )}

              </Row>
            </Col>
            <Col size="md-6">
              <Row>
                <h1>Name</h1>
                <h1> {this.state.firstName}
                  {this.state.lastName}
                </h1>
              </Row>
              <Row>
                {this.state.socialMediaHandles}
              </Row>
              <Row>
                <div>
                  <h1>Bio</h1>
                  <Bio bio={this.state.bio}>
                  </Bio>
                </div>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col size="md-4">
              <div>
                <h1>Media 1</h1>
                <MediaClips media={this.state.mediaClips}>

                </MediaClips>
              </div>
            </Col>
            <Col size="md-4">
              <div>
                <h1>Media 2</h1>
                <MediaClips media={this.state.mediaClips}>

                </MediaClips>
              </div>
            </Col>
            <Col size="md-4">
              <div>
                <h1>Media 3</h1>
                <MediaClips media={this.state.mediaClips}>

                </MediaClips>
              </div>
            </Col>


          </Row>
            
          </div>


        ) }
        
    state = {
        firstName: "",
        lastName: "",
        socialMediaHandles: "",
        bio: "",
        profilePicture: "",
        mediaClips: "",
        upcoming:"",


    };
    componentDidMount() {
        this.loadProfile();
    }


    loadProfile = () => {
        API.getProfile().then(res => this.setState({
            firstName: res.data,
            lastName: "",
            socialMediaHandles: "",
            bio: "",
            profilePicture: "",
            mediaClips: "",
            upcoming:""
        })
        ).catch(err => console.log(err));
    };


    render(props) {
        return (
            <div className ="Profile">
            <Container fluid>
                <Searchbar />

                <Row>
                    <Col size="md-6">
                    <Row>
                        <h1>Profile Picture</h1>
                        <img>
                            <ProfilePicture image=
                                {this.state.profilePicture}>
                            </ProfilePicture>
                        </img>
                        </Row>
                        <Row>
                        <h1>Artist Updates</h1>
                        {this.state.update.length ?(
                            <Update> {this.state.update.map(update =>(
                                <UpdateItem key={update._id}>
                                </UpdateItem>
                            ))}
                            </Update>
                            ):(
                                <h2> {this.state.firstName} doesn't have any updates, check back soon.</h2>
                            )}
                        
                        </Row>
                    </Col>
                    <Col size="md-6">
                        <Row>
                            <h1>Name</h1>
                            <h1> {this.state.firstName}
                                {this.state.lastName}
                            </h1>
                        </Row>
                        <Row>
                            {this.state.socialMediaHandles}
                        </Row>
                        <Row>
                            <div>
                                <h1>Bio</h1>
                                <Bio bio={this.state.bio}>
                                </Bio>
                            </div>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-4">
                        <div>
                            <h1>Media 1</h1>
                            <MediaClips media={this.state.mediaClips}>

                            </MediaClips>
                        </div>
                    </Col>
                    <Col size="md-4">
                    <div>
                            <h1>Media 2</h1>
                            <MediaClips media={this.state.mediaClips}>

                            </MediaClips>
                        </div>
                    </Col>
                    <Col size="md-4">
                    <div>
                            <h1>Media 3</h1>
                            <MediaClips media={this.state.mediaClips}>

                            </MediaClips>
                        </div>
                    </Col>


        <Row>
          <Col size="md-6">
            <ProfilePicture>
              <h1>Profile Picture</h1>
              <img>
                {this.state.profilePicture}</img>
            </ProfilePicture>
          </Col>
          <Col size="md-6">
            <Row>
              <h1>Name</h1>
              <h1> {this.state.firstName}
                {this.state.lastName}
              </h1>
            </Row>
            <Row>
              {this.state.socialMediaHandles}
            </Row>
            <Row>
              <Bio>
                <h1>Bio</h1>
                <div>
                  {this.state.bio}
                </div>
              </Bio>
            </Row>
          {/* </Col> */}
        {/* </Row> */}
        <Row>
          <Col size="md-4">
            <MediaClips>
              <div>
                <h1>Media 1</h1>
                {this.state.mediaClips}
              </div>
            </MediaClips>
          </Col>
          <Col size="md-4">
            <MediaClips>
              <div>
                <h1>Media 2</h1>
                {this.state.mediaClips}
              </div>
            </MediaClips>
          </Col>
          <Col size="md-4">
            <MediaClips>
              <div>
                <h1>Media 3</h1>
                {this.state.mediaClips}
              </div>
            </MediaClips>
          </Col>
       
                </Row>

                <Navbar />
            </Container >

        
    
    </div>
         ) }


}

export default Profile;
