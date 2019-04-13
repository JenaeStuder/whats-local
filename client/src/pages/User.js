import React, { Component } from "react";
//import API from "../utils/API";
import Col from "../components/Col";
import Container from "../components/Container";
import Row from "../components/Row";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Favorites from "../components/Favorites";
import waves from "../images/vertical-waves.png";
import "./User.css";
//import Favorites from "../components/favorites";

import Searchbar from "../components/Searchbar";





class normalUser extends Component {
    state = {
        firstName: "Vincent",
        lastName: "van Gogh",
        favorites: " "


    };
    // componentDidMount() {
    //     this.loadProfile();
    // }

    // loadProfile = () => {
    //     API.getProfile().then(res => this.setState({
    //         firstName: res.data,
    //         lastName: "",
    //         favorites:"",
    //     })
    //     ).catch(err => console.log(err));
    // };


    render(props) {
        return (
        <div>
            <Container fluid>


                <Row>
                    <Col size="md-12" id="header">
                        <Header />
                        <h1 id="profileName"> {this.state.firstName} {this.state.lastName}</h1>

           
            <Searchbar />
                <Row>
                    <Col size="md-6">
                   

                    </Col>
            
                    {/* <Col size="md-6">
                        <Row>

                            <h1>Name</h1>


                        <Favorites favorites ={this.state.favorites} />
                            

                        </Row>
                        <Row>

                        </Row>
                        <Row>

                        </Row>
                    </Col> */}
                </Row>
        </Container>
        <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Favorites/>
                    </Col>
                </Row>

        </Container>
        <Container fluid>
                <Row>
                    <Col size="md-12" id="navbar">
                        <Navbar/>
                    </Col>


                </Row>
        </Container >
        </div>
        )
    }

}

export default normalUser;