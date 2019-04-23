import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import Container from "../components/Container";
//import Row from "../components/Row";
//import Col from "../components/Col";
//import Jumbotron from "../components/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
//import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "./Signup.css";


class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //   handleFormSubmit = event => {
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
      <div>
        <Row>
          <Col size="md-6">
            <div >
              <h1 id="title">what's</h1>
              <h1 id="title">local</h1>
            </div>
            <p id="subtitle">We missed you</p>
            <Card>
              <LoginForm />
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Login;
