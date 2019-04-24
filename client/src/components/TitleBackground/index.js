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
              <h1 className="display-3">whats local</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <h6 className="lead">connect | local | art</h6>
            </Col>
          </Row>
        </div>
      </div>
      <br />
      <Searchbar />
    </div>
  );
}

export default TitleBackground;
