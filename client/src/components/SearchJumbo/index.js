<<<<<<< HEAD
import React from "react";
import SearchBtn from "../SearchBtns";

function SearchJumbo() {
  return (
    <div>
      <div class="jumbotron">
        <SearchBtn
          className="btn btn-lg"
          id="artistBtn"
          type="submit"
          //onClick=""
=======

import React, {Component} from "react";
import SearchBtn from "../SearchBtns";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.css"

class SearchJumbo extends Component {

    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }

    render() {
  return (
    <div>
        <Card>
            <Card.Body>
      <div class="jumbotron jumbo-image" style={{backgroundImage : `url(https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`}}>
        <SearchBtn
          className="btn btn-lg search-jumbo-button"
          id="artistBtn button"
          type="submit"
          onClick={this.handleShow}
>>>>>>> 7bdf330e0b8a22b3f38b2dfc5e003976707cdedc
          title="artist"
          // backgroundImage="https"
        />
      </div>

<<<<<<< HEAD
      <div class="jumbotron">
        <SearchBtn
          className="btn btn-lg"
          id="cityBtn"
          type="submit"
          //onClick=""
=======


      <div class="jumbotron jumbo-image" style={{backgroundImage : `url(https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`}}>

        <SearchBtn
          className="btn btn-lg search-jumbo-button"
          id="cityBtn button"
          type="submit"
          onClick={this.handleShow}
>>>>>>> 7bdf330e0b8a22b3f38b2dfc5e003976707cdedc
          title="city"
          // backgroundImage="https"
        />
      </div>

<<<<<<< HEAD
      <div class="jumbotron">
        <SearchBtn
          className="btn btn-lg"
          id="categorybtn"
          type="submit"
          //onClick=""
=======


      <div class="jumbotron jumbo-image" style={{backgroundImage : `url(https://images.pexels.com/photos/959314/pexels-photo-959314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`}}>

        <SearchBtn
          className="btn btn-lg search-jumbo-button"
          id="categorybtn button"
          type="submit"
          onClick={this.handleShow}
>>>>>>> 7bdf330e0b8a22b3f38b2dfc5e003976707cdedc
          title="category"
          // backgroundImage="https"
        />
      </div>
<<<<<<< HEAD
    </div>
  );
}
=======

      </Card.Body>
      </Card>
      <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
        </Modal>
    </div>
  );
    }

>>>>>>> 7bdf330e0b8a22b3f38b2dfc5e003976707cdedc

export default SearchJumbo;
