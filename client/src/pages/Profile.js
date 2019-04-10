import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import ProfilePicture from "../ProfilePicture";
import Bio from "../components/Bio";
import MediaClips from "../components/MediaClips"
import Col from "../components/Col";
import Container from "../components/Container";
import Row from "../components/Row";


class Profile extends Component {
    state = {
        firstName: "",
        lastName: "",
        socialMediaHandles: "",
        bio: "",
        profilePicture: "",
        mediaClips: ""


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
            mediaClips: ""
        })
        ).catch(err => console.log(err));
    };


    render() {
        return (
            <Container fluid>
           
        
                <Row>
                    <Col size="md-6">
                        <h1>Profile Picture</h1>
                        <img>
                            {this.state.profilePicture}</img>
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
                            <h1>Bio</h1>
                            <div>
                                {this.state.bio}
                            </div>
                        </Row>
                    </Col>
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




            </Container >
        )
    }

}

export default Profile;