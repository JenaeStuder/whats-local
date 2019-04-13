import React, { Component } from "react";
import API from "../utils/API";
import Col from "../components/Col";
import Container from "../components/Container";
import Row from "../components/Row";
import Favorites from "../components/Favorites";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";




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


    render(props) {
        return (
            <div className="user">
            <Container fluid>
           
            <Searchbar />
                <Row>
                    <Col size="md-6">
                   
                    </Col>
                    <Col size="md-6">
                        <Row>
                        <Favorites favorites ={this.state.favorites} />
                            
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


            <Navbar />

            </Container >
            </div>
        )
    }

}

export default Profile;

