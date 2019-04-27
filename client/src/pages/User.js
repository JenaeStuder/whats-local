import React, { Component } from "react";
//import API from "../utils/API";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Searchbar from "../components/Searchbar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Favorites from "../components/Favorites";
import Brand from "../components/Brand";
import "./User.css";
//import BackgroundImage from "../components/BackgroundImage";
//import Favorites from "../components/favorites";
import Create from "../components/Create";
import Suggestions from "../components/Suggestions";

//import Favorites from "../components/favorites";

class normalUser extends Component {
    state = {

        firstName: "Vincent",
        lastName: "van Gogh",
        favorites: " ",
        loading: true,



    };
    // componentDidMount() {
    //     this.loadProfile();
    // }

    // loadProfile = () => {
    //     API.getProfile().then(res => this.setState({
    //         firstName: res.data,
    //         lastName: "",
    //         favorites:"",
    //         loading: false,

    //     })
    //     ).catch(err => console.log(err));
    // };


    render() {
        return (

            <div className="userHeader">
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
                <Row>
                    <Col md={12} id="header">
                        <br></br>
                        <img id="profileImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/1024px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" alt="Vincent"></img>
                        <h1 id="profileName"> {this.state.firstName} {this.state.lastName}</h1>
                    </Col>
                </Row>
                {/* <Row>
                    {this.state.loading? <Col size="md-6">

                        <Row>
                            <h1>Name</h1>

                        </Row>
                        <Row>

                        </Row>
                        <Row>

                        </Row>

                    </Col>: null}

                </Row> */}
                <Row id="primaryUserRow">
                    <Col md={3}>
                        <Favorites />
                    </Col>
                    <Col md={9}>
                        <Create />
                    </Col>
                </Row>
                <Row id="secondaryUserRow">
                    <Col md={3}>
                        <Suggestions />
                    </Col>
                </Row>
                
                    
                {/* <Navbar /> */}
                    
                

            


    
    

            <Row>
              <Col size="md-12" id="header">
                <Header />
                {/* 
                I relocated the profile Name/info/bio to the Header component instead of on the User Page */}

                {/* <h5 id="profileName">
                  {" "}
                  {this.state.firstName} {this.state.lastName}
                </h5> */}
              </Col>
            </Row>
            <Favorites />
          
          <Col size="md-12" id="navbar">
            <Navbar />
          </Col>
        </div>
      
    );
  }
}

export default normalUser;
