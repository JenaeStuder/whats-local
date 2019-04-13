import React from "react";
import Button from "../Button";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

function Header(props) {
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
        <br></br>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/1024px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" alt="Vincent"></img>
    </div>
    </div>
  );
}

export default Header;