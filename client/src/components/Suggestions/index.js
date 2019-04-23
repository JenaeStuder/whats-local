import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import "./style.css";


function Suggestions(props) {
    return (
        <div>
            <Card>
                <Card.Header id="suggestionsHeader">Suggestions for You</Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={12}>
                            <ListGroup>
                                <ListGroup.Item action href="#" id="suggestedUser">
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/1024px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" id="userPic" roundedCircle />
                                    <h4 id="userSuggestName" float="left">User 1</h4>
                                </ListGroup.Item>
                                <ListGroup.Item action href="#" id="suggestedUser">
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/1024px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" id="userPic" width="50px" height="50px" float="left" roundedCircle /> 
                                    <h4 id="userSuggestName" float="left">User 2</h4>
                                </ListGroup.Item>
                                <ListGroup.Item action href="#" id="suggestedUser">
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/1024px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" id="userPic" width="50px" height="50px" float="left" roundedCircle />
                                    <h4 id="userSuggestName" float="left">User 3</h4>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Suggestions;