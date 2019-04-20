import React from "react";
import "./style.css";
import Container from "react-bootstrap";
import Row from "react-bootstrap";
import Col from "react-bootstrap";
import ProfilePicture from "../ProfilePicture";
import MediaClips from "../MediaClips";

class Spotlight extends Component {

    state = {
        firstName: "",
        lastName: "",
        socialMediaHandles: "",
        profilePicture: "",
        mediaClips: "",
    
       


    // };
    // componentDidMount() {
    //     this.loadProfile();
    // }


    // loadProfile = () => {
    //     API.getProfile().then(res => this.setState({
    //         firstName: res.data,
    //         lastName: "",
    //         socialMediaHandles: "",
    //         profilePicture: "",
    //         mediaClips: "",
    //         
    //     })
    //     ).catch(err => console.log(err));
    // };


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
            
        );
    }

}
};
export default Spotlight;