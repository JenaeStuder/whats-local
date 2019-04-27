import React, { Component } from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfilePicture from "../ProfilePicture";
import MediaClips from "../MediaClips";
import Card from "react-bootstrap/Card";
import API from '../../utils/API';

class ArtistSpotlight extends Component {

    state = {
        firstName: "Vincent",
        lastName: "van Gogh",
        socialMediaHandles: "Instagram: @vangoghmuseum",
        profilePicture: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/1024px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
        mediaClips: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg", "https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/03/05/11/sei54258302-0.jpg", "https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2F5l8xfYEUDrZgqKmWyKeX0g%252Fvan-gogh-sunflowers-no-travel-lead.jpg&width=1200&quality=80"]

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
            })
        }
        ).catch(err => console.log(err));
    };


    render(props) {
        return (
            <div className="Spotlight">
                <Container>
                    <Card id="spotlightCard">
                        <Card.Header id="spotlightHeader">Artist Spotlight</Card.Header>
                        <Card.Body>
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
                                                <h5 className="profileInfo">
                                                    {this.state.firstName} {this.state.lastName}
                                                </h5>
                                            </Row>
                                            <Row>
                                                <h5 className="profileInfo">{this.state.socialMediaHandles}</h5>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row id="ProfileMedia">
                                <Col xs={12} md={4}>
                                    <div>
                                        <img className="img-thumbnail" id="mediaImage" src={this.state.mediaClips[0]}></img>
                                    </div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <div>
                                        <img className="img-thumbnail" id="mediaImage" src={this.state.mediaClips[1]}></img>
                                    </div>
                                </Col>
                                <Col xs={12} md={4}>
                                    <div>
                                        <img className="img-thumbnail" id="mediaImage" src={this.state.mediaClips[2]}></img>
                                    </div>
                                </Col>
                                {/* <Col xs={12} md={4}>
                            <div>
                                <h6>Media 1</h6>
                                <MediaClips media={this.state.mediaClips[0]}>
                                </MediaClips>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div>
                                <h6>Media 2</h6>
                                <MediaClips media={this.state.mediaClips[1]}>
                                </MediaClips>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div>
                                <h6>Media 3</h6>
                                <MediaClips media={this.state.mediaClips[2]}>
                                </MediaClips>
                            </div>
                        </Col> */}
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
        )
    }
};
export default ArtistSpotlight;