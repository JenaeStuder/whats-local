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
import jwt_decode from "jwt-decode";
// import UserUpdates from "../componentsUserUpdates";
import Loader from "../components/Loader";

import Background from "../assets/images/brick-wall.jpg";

import Brand from "../components/Brand";

class MainPage extends Component {

    state = {
        userName: "",
        firstName: "",
        lastName: "",
        socialMediaHandles: "",
        bio: "",
        profilePicture: "",
        mediaClips: [],
        upcoming: "",
        loading: "false",
        user_id: jwt_decode(localStorage.jwtToken.split(" ")[1]).id

    };
    componentDidMount() {
        console.log(this.state.user_id);
        console.log(this.state);
        this.loadProfile();
    }

    loadProfile = () => {
        API.getProfile(this.state.user_id)
          .then(res => {
            console.log(res);
    
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

    const style ={
      minWidth: "100vw",
      minHeight: "100vh",
      backgroundImage: `url(${Background})`,
      backgroundSize:'cover',
      backgroundRepeat: 'no-repeat',
      margin: 0,
    };
    return (
      <div className="MainPage"
      style={style}
      >

        
        <div className="row no-gutters">

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
            </div>
        )
    }


}

export default MainPage;
