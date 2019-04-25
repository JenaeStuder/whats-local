import React from "react";
import Container from "../Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import "./style.css";



function Favorites(props) {

    return (
        <div>
            <Card bg="light" text="white" id="content">
                <Card.Header id="favoriteArtistHeader">Favorite Artists</Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={12}>
                            <ListGroup>
                                <ListGroup.Item action href="#" id="favoriteArtist">
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/1024px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" id="userPic" roundedCircle />
                                    <h4 id="favoriteArtistName" float="left">User 1</h4>
                                </ListGroup.Item>
                                <ListGroup.Item action href="#" id="favoriteArtist">
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/1024px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" id="userPic" width="50px" height="50px" float="left" roundedCircle />
                                    <h4 id="favoriteArtistName" float="left">User 2</h4>
                                </ListGroup.Item>
                                <ListGroup.Item action href="#" id="favoriteArtist">
                                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/1024px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" id="userPic" width="50px" height="50px" float="left" roundedCircle />
                                    <h4 id="favoriteArtistName" float="left">User 3</h4>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

        </div>
    );


}

export default Favorites;