import React, { Component } from "react";
import API from "../utils/API";
import Col from "../components/Col";
import Container from "../components/Container";
import Row from "../components/Row";
import Favorites from "../components/favorites";




class Profile extends Component {
    state = {
        firstName: "",
        lastName: "",
        favorites:""


    };
    componentDidMount() {
        this.loadProfile();
    }

    loadProfile = () => {
        API.getProfile().then(res => this.setState({
            firstName: res.data,
            lastName: "",
            favorites:"",
        })
        ).catch(err => console.log(err));
    };


    render() {
        return (
            <Container fluid>
           
        
                <Row>
                    <Col size="md-6">
                    
                    </Col>
                    <Col size="md-6">
                        <Row>
                            <h1>Name</h1>
                            <h1> {this.state.firstName}
                                {this.state.lastName}
                            </h1>
                        </Row>
                        <Row>
                            
                        </Row>
                        <Row>
                            
                        </Row>
                    </Col>
                </Row>
            <Row>
                <Col size="md-4">
                
                </Col>
                <Col size="md-4">
                
                    
                </Col>
                <Col size="md-4">
                
                </Col>


            </Row>




            </Container >
        )
    }

}

export default Profile;

