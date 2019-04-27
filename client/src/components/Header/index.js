import React, { Component } from "react";
import Button from "../Button";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

class Header extends Component {
  state = {
    firstName: "Vincent",
    lastName: "van Gogh",
    status: "Local", //Artist or Local
    bio:
      "Bio goes here. Hello! My name in Vincent. I love listening to local music with my good ear",
    favorites: " ",
    loading: true
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">
              <Button
                className="btn btn-outline-info"
                id="logout"
                title="Logout"
              />
            </Col>
          </Row>
        </Container>
        <div>
          <br />

          <img
            className="user-image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/1024px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg"
            alt="Vincent"
          />

          <h7 id="profileName">
            {" "}
            {this.state.firstName} {this.state.lastName}
            <br />
            <br />
            {this.state.status}
          </h7>
          <h6 id="bio">{this.state.bio}</h6>
        </div>
      </div>
    );
  }
}

export default Header;
