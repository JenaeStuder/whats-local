import React, { Component } from "react";
import Button from "../Button";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Searchbar from "../Searchbar";
import Brand from "../Brand";
import "./style.css";

function Header(props) {
  return (
    <div>
            <Row>
                <Col size="md-12">
                    <Button
                        className="btn btn-outline-info"
                        id="logout"
                        title="Logout"
                    />
                </Col>
            </Row>
            <Row>
                <Col size="md-3">
                    <Brand/>
                </Col>
                <Col size="md-6">
                    <Searchbar/>
                </Col>
            </Row>
    <div>
        <br></br>
        <img id="profileImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/1024px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" alt="Vincent"></img>
    </div>
    </div>
  );
}

export default Header;
