import React, { Component } from "react";
// import SignUpForm from "../components/SignUpForm";
//import Container from "../components/Container";
//import Row from "../components/Row";
//import Col from "../components/Col";
//import Jumbotron from "../components/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import EditForm from "../components/EditForm";
import "./Signup.css";
import BackgroundImage from "../components/BackgroundImage"

class Edit extends Component {
  state = {
    fullName: "",
    username: "",
    password: "",
    zipcode: "",
    profilePicture: "",
    media: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit = event => {
  //     event.preventDefault();
  //     if (this.state.title && this.state.author) {
  //       API.saveBook({
  //         title: this.state.title,
  //         author: this.state.author,
  //         synopsis: this.state.synopsis
  //       })
  //         .then(res => this.loadBooks())
  //         .catch(err => console.log(err));
  //     }
  //   };

  render() {
    return (
      <div className="Background">
        {/* <Container style={{ marginTop: 20, height: "100vh" }}> */}
        <Row>
          <Col size="md-6">
            <div class="jumbotron jumbotron-fluid whats-local-jumbo">
              <h1 id="title">what's</h1>
              <h1 id="title">local</h1>
            </div>
            <p id="subtitle">Edit Profile</p>
            <Card>
              <EditForm />
            </Card>
          </Col>
        </Row>
        {/* </Container> */}
        {/* <Container>
                <Row>
                    {/* <Col className="image">
                
                    </Col> */}
        {/* <Col>
                    <Jumbotron fluid>
                            <Container>
                                <h1>what's local?</h1>
                                <h3>
                                    Sign Up
                                </h3>
                            </Container>
                    </Jumbotron>
                    <Card>
                        <Card.Body>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Full Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control as="select">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container> */}
      </div>
    );
  }
}

export default Edit;
