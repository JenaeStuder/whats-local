import React from "react";
import Searchbar from "../Searchbar";
import Login from "../Login";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function TitleBackground() {
  return (
    <div className="container-fluid" id="titleBackground">
      <Login />
      <div className="jumbotron jumbotron-fluid" id="title-jumbo">
        <div className="container">
          <Row>
            <Col xs={12}>
              <h1 className="display-3">what's local</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p className="lead">connect | local | art</p>
            </Col>
          </Row>
        </div>
      </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>


    <div id="styling">
      <Row >
        <Col xs={2}></Col>
        <Col xs={8}>
        <Searchbar />
        </Col>
        <Col xs={2}></Col>
      </Row>
    </div>
    </div>
    
  );
}

export default TitleBackground;
