import React, { Component } from "react";
import API from "../utils/API";
import ProfilePicture from "../components/ProfilePicture";
import Bio from "../components/Bio";
import MediaClips from "../components/MediaClips";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Update from "../components/Upcoming";
import UpdateItem from "../components/UpdateItem"
import "./Profile.css"
import BackgroundImage from "../components/BackgroundImage"

class Profile extends Component {

    state = {
        firstName: "",
        lastName: "",
        socialMediaHandles: "",
        bio: "",
        profilePicture: "",
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

                <div className="Background">
                    <Searchbar />
                    <br>
                    </br>
                    <Container>
                        <Row className="ProfileInfo">
                            {this.state.loading ? <Row >
                                <Col md={12}>
                                    <Row>
                                        <Col xs={12} md={6}>

                                            {/* <h6>Profile Picture</h6> */}

                                            <ProfilePicture image={this.state.profilePicture} />


                                        </Col>
                                        <Col xs={12} md={6}>
                                            <Row className="InfoSection" id="info-border-wrap">
                                                {/* <h6>Name</h6> */}
                                                <h5>
                                                    {this.state.firstName}
                                                    {this.state.lastName}
                                                </h5>
                                            </Row>
                                            <Row>

                                                <h5>{this.state.socialMediaHandles}</h5>
                                            </Row>
                                            <Row>
                                                <div>
                                                    {/* <h6>Bio</h6> */}
                                                    <Bio bio={this.state.bio}>

                                                    </Bio>
                                                </div>
                                            </Row>
                                        </Col>

                                    </Row>
                                </Col>

                                <Row>

                                    <Col sm={12} className="Updates-border-wrap" id="updates">

                                        {/* <h6>Artist Updates</h6> */}
                                        {this.state.upcoming.length ? (
                                            <Update>
                                                {this.state.upcoming.map(update => (
                                                    <UpdateItem key={update._id}>
                                                    </UpdateItem>
                                                ))}
                                            </Update>
                                        )
                                            : (
                                                <h5> {this.state.firstName} doesn't have any updates, check back soon!</h5>
                                            )}

                                    </Col>
                                </Row>
                            </Row> : null}
                        </Row>

                        <Row className="ProfileMedia">
                            {this.state.loading ? <Row >
                                <Col xs={12} md={4}>
                                    <div>
                                        <h6>Media 1</h6>
                                        <MediaClips media={this.state.mediaClips}>
                                        </MediaClips>
                                    </div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <div>
                                        <h6>Media 2</h6>
                                        <MediaClips media={this.state.mediaClips}>
                                        </MediaClips>
                                    </div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <div>
                                        <h6>Media 3</h6>
                                        <MediaClips media={this.state.mediaClips}>
                                        </MediaClips>
                                    </div>
                                </Col>
                            </Row> : null}

                        </Row>
                    </Container>
                    <Col size="md-12" id="navbar">
                        <Navbar />
                    </Col>
                </div>
            </div>
        );
    }
}
export default Profile;