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





class normalUser extends Component {
    state = {

        firstName: "Vincent",
        lastName: "van Gogh",
        favorites: " "
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

            <div className="user">
            
           
            <Searchbar />


                <Row>
                    <Col size="md-12" id="header">
                        <Header />
                        <h1 id="profileName"> {this.state.firstName} {this.state.lastName}</h1>
                    </Col>

                    {this.state.loading? <Col size="md-6">

                        <Row>
                            <h1>Name</h1>

                        </Row>
                        <Row>

                        </Row>
                        <Row>

                        </Row>

                    </Col>: null}

                </Row>
      
                    <Col size="md-12" id="navbar">
                        <Navbar/>
                    </Col>

            
            </div>

        )
    }

}

export default normalUser;
