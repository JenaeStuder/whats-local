import React, { Component }  from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfilePicture from "../ProfilePicture";
import MediaClips from "../MediaClips";
import API from '../../utils/API';

class ArtistSpotlight extends Component {

    state = {
        firstName: "",
        lastName: "",
        socialMediaHandles: "",
        profilePicture: "",
        mediaClips: "",

     };
    componentDidMount() {
        this.loadProfile();
    }


    loadProfile = () => {
        API.getProfile().then(res => {
            console.log(res);
            
            this.setState({
            firstName: res.firstName,
            lastName: res.lastName,
            socialMediaHandles: res.socialMediaHandles,
            profilePicture: res.profilePicture,
            mediaClips: res.media,
        })}
        ).catch(err => console.log(err));
    };


    render(props) {
        return (
            <div className="Spotlight">
                <Container>
                    <Row className="SpotlightArtist">
                        <Col md={12}>
                            <Row>
                                <Col xs={12} md={6}>
                                    {/* <h6>Profile Picture</h6> */}
                                    <ProfilePicture image={this.state.profilePicture} />
                                </Col>                              
                                <Col xs={12} md={6}>
                                    <Row className="InfoSection">
                                        {/* <h6>Name</h6> */}
                                        <h5>
                                            {this.state.firstName}
                                            {this.state.lastName}
                                        </h5>
                                    </Row>
                                    <Row>
                                        <h5>{this.state.socialMediaHandles}</h5>
                                    </Row>                                 
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="ProfileMedia"> 
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
                    </Row>
                </Container>       
            </div>           
        )}
};
export default ArtistSpotlight;