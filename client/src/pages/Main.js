import React, { Component } from "react";
import ArtistSpotlight from "../components/ArtistSpotlight";
import "./Main.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Searchbar from "../components/Searchbar";
import Create from "../components/Create";
import Navbar from "../components/Navbar";
import Suggestions from "../components/Suggestions";
import Button from "../components/Button";
import API from "../utils/API";
// import UserUpdates from "../componentsUserUpdates";

import Brand from "../components/Brand";

class MainPage extends Component {

    state = {

        loading: "true",

    };
    componentDidMount() {
        this.loadProfile();
    }

    loadProfile = (user_id) => {
        API.getProfile(user_id).then(res => {
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

    render() {
        return (
            <div className="MainPage">

                <Container>
                    <Row>
                        <Col xs={2} md={2}>

                            <Brand />

                        </Col>
                        <Col xs={6} md={6} id="search">
                            <Searchbar />
                        </Col>
                        <Col xs={4} id="mainPageNav">
                            <a className="nav-item nav-link navbar-brand" id="mainPageNavItem" href="#">
                                <i class="fas fa-heart" />
                            </a>
                            <a className="nav-item nav-link navbar-brand" id="mainPageNavItem" href="/edit">
                                <i class="fas fa-edit"></i>
                            </a>
                            <a className="nav-item nav-link navbar-brand" id="mainPageNavItem" href="/user">
                                <i class="fas fa-users" />
                            </a>
                            <a className="nav-item nav-link navbar-brand btn btn-outline-info" id="mainPageLogout" title="Logout" href="login">
                                Logout
                            </a>
                        </Col>

                    </Row>
                </Container>
                <Container>
                    <Row className="Spotlight">
                        <Col md={12}>
                            <ArtistSpotlight />
                        </Col>
                        {/* {this.state.loading ? <Row>
                            <Col md={12}>
                                <ArtistSpotlight />
                            </Col>
                        </Row> : null} */}
                    </Row>
                    {/* <Row className="Feed">
                        {this.state.loading ? <Row>
                            <Col xs={12} md={6}>
                                <Row>
                                    {/* <Create/> */}
                    {/* </Row>
                                <Row> */}
                    {/* <Suggestions/> */}
                    {/* </Row>
                            </Col>
                            <Col xs={12} md={6}> */}
                    {/* <UserUpdates/> */}
                    {/* </Col>
                        </Row> : null}
                    </Row> */}
                    <Container>
                    <Row>
                        <Col md={8}>
                            <Create id="createPost"/>
                        </Col>
                        <Col md={4}>
                            <Suggestions id="suggestionsCard"/>
                        </Col>
                    </Row>
                    </Container>
                </Container>


            </div>
        )
    }
}

export default MainPage;
