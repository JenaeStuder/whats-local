import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
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
import UpdateItem from "../components/UpdateItem";
import "./Profile.css";
import Brand from "../components/Brand";
import jwt_decode from "jwt-decode";
// import Loader from "../components/Loader";


class Profile extends Component {

    state = {
        userName: "",
        firstName: "",
        lastName: "",
        socialMediaHandles: "",
        bio: "",
        profilePicture: "",

        mediaClips: [],
        upcoming: "",
        load: "false",


    };
    componentDidMount() {
        this.loadProfile();

    }


    loadProfile = () => {

        // API.getProfile(this.state.user._id)
        //     .then(res => {
        //         console.log(res);

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
            })
            .catch(err => console.log(err));

    };



    render() {
        const { user } = this.props.auth;
        console.log({ user });
        return (

            <div className="Profile">
                <div>
                    <Container>
                        <Row>
                            <Col xs={4} md={4}>
                                <Brand />
                            </Col>
                            <Col xs={8} md={8} id="search">
                                <Searchbar />
                            </Col>
                        </Row>
                        <br>
                        </br>
                        <Row>
                            <Row className="ProfileInfo">
                                <Col sx={1}>
                                    <Col xs={10}>
                                        <Row >
                                            {/* Row that contains the profile picture, Artist name, social media, bio, and updates. */}
                                            <Col md={12}>
                                                <Row>
                                                    <Col xs={12} md={6} className="PicColumn" >
                                                        <ProfilePicture image={this.state.profilePicture} />
                                                    </Col>
                                                    <Col xs={12} md={6}>
                                                        <Row className="InfoSection" id="info-border-wrap">
                                                            {/* <h6>Name</h6> */}
                                                            <Col xs={1}></Col>
                                                            <Col xs={10}>
                                                                <h5 id="nameSection">
                                                                    {this.state.firstName}
                                                                    &nbsp;
                                                    {this.state.lastName}
                                                                </h5>
                                                            </Col>
                                                            <Col xs={1}></Col>
                                                        </Row>
                                                        <Row>
                                                            <h5>
                                                                {this.state.socialMediaHandles}
                                                            </h5>
                                                        </Row>
                                                        <Row>
                                                            <div>
                                                                {/* <h6>Bio</h6>  */}
                                                                <Bio bio={this.state.bio}>
                                                                </Bio>
                                                            </div>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Row>
                                                <Col xs={1}></Col>
                                                <Col sm={10} className="Updates-border-wrap" id="updates">
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
                                                <Col xs={1}></Col>
                                            </Row>
                                        </Row>
                                    </Col>
                                </Col>
                                <Col xs={1}></Col>
                            </Row>
                            <br />
                            <Row className="ProfileMedia">
                                <div>
                                    <Col xs={1}></Col>
                                    <Col xs={10}>
                                        {/* {this.state.loading ?( */}

                                        {
                                            this.state.mediaClips.map(item => {
                                                const newURL = item.replace(/ /g, "%20");
                                                const mediaTypeParse = newURL.split(".");
                                                const mediaTypeExt = mediaTypeParse[mediaTypeParse.length - 1];
                                                console.log(newURL, `File Extension: ${mediaTypeExt}`);

                                                let mediaClassification = "";

                                                if (mediaTypeExt == "png" || "jpeg" || "gif" || "tiff") {
                                                    mediaClassification = "image"
                                                } else if (mediaTypeExt == "mp4" || "mov" || "avi" || "flv" || "wmv") {
                                                    mediaClassification = "video"
                                                } else if (mediaTypeExt == "mp3" || "wav" || "aiff") {
                                                    mediaClassification = "audio"
                                                }

                                                return <Col xs={12} md={4}>
                                                    <MediaClips media={this.state.mediaClips} mediaType={mediaClassification} url={newURL}>
                                                    </MediaClips>
                                                </Col>
                                            })
                                        }
                                        {/* ) :( 
                            <Loader/>)}  */}
                                    </Col>
                                    <Col xs={1}></Col>
                                </div>
                            </Row>
                        </Row>
                        <br></br>
                        <br></br>
                    </Container>
                    </div >
                    <Row>
                <Col size="md-12" id="navbar">
                    <Navbar />
                </Col>
                  </Row>
                  
             </div >
              

             
    );
    }
}

Profile.propTypes = {

    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Profile);

