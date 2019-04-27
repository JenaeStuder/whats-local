import React from "react";
import Card from "react-bootstrap/Card";
import Button from "../Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import FileUpload from "../FileUpload";
import "./style.css";

function Create(props) {
    return (
        <div>
            <Card id="createPostCard">
                <Card.Header id="postHeader">Create Post</Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={3}>
                            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/1024px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg" thumbnail />
                        </Col>
                        <Col md={9} id="postArea">
                            <InputGroup>
                                <FormControl as="textarea" aria-label="With textarea" placeholder="What's on your mind, Vincent?"/>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row id="postFooter">
                        <Col md={6}>
                            <FileUpload
                                id="uploadpic"
                                name="profilepic"
                                placeholder="Upload Profile Picture"
                            />
                        </Col>
                        <Col md={6}>
                            <Button className="btn btn-info"
                                id="Post"
                                type="submit"
                                //onClick=""
                                title="Post">
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Create;