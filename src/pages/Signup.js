import React from "react";
import SignUpForm from "../components/SignUpForm";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Jumbotron from "../components/Jumbotron";
import './Signup.css';

function SignUp() {

        return (

            <div>
                <Container style={{ marginTop: 30}}>
                    <Row>
                        <Col size="md-12">
                            <Jumbotron>
                                <h1>what's</h1>
                                <h1>local?</h1>
                                <p>connect | local | art</p>
                            </Jumbotron>
                        </Col>  
                    </Row>
                </Container>
                <Container style={{ marginTop: 30}}>
                    <Row>
                        <Col size="md-12">
                            <SignUpForm/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }


export default SignUp;