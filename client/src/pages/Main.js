import React, { Component } from "react";
import ArtistSpotlight from "../components/ArtistSpotlight";
import "./main.css";
import Container from "react-bootstrap";
import Col from "react-bootstrap";
import Row from "react-bootstrap";
import Searchbar from "../components/Searchbar";
import Create from "../components/Create";
import Navbar from "../components/Navbar";
import Suggestions from "../components/Suggestions";
import UserUpdates from "../componentsUserUpdates";
import BackgroundImage from "../components/BackgroundImage";
import Brand from "../components/Brand";

class MainPage extends Component{
    render(){
        return(
            <div className="MainPage">
            <div className= "Background">
            <Container>
                <Row>
                    <Brand/>
                    <Searchbar/>
                    <Navbar/>
                </Row>
            </Container>
            <Container>
            <Row className="Spotlight">
            <ArtistSpotlight/>
            </Row>
            <Row className="Feed">
                <Col xs={12} md ={6}>
                <Row>
                    <Create/>
                </Row>
                <Row>
                    <Suggestions/>
                </Row>
                </Col>
                <Col xs={12} md={6}>
                <UserUpdates/>
                </Col>
            </Row>


            </Container>
            
            </div>
            </div>
        )
    }
}

export default MainPage;
