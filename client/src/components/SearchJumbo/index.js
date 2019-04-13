<<<<<<< HEAD
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
      <div class="jumbotron" style={{backgroundImage : `url(https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`}}>
        <SearchBtn
          className="btn btn-lg"
          id="artistBtn button"
          type="submit"
          onClick={this.handleShow}
=======
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
>>>>>>> a18170bb39771eecffdfb00859b00f14da0246bd
          title="artist"
          // backgroundImage="https"
        />
      </div>

<<<<<<< HEAD
      <div class="jumbotron" style={{backgroundImage : `url(https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`}}>
        <SearchBtn
          className="btn btn-lg"
          id="cityBtn button"
          type="submit"
          onClick={this.handleShow}
=======
      <div class="jumbotron">
        <SearchBtn
          className="btn btn-lg"
          id="cityBtn"
          type="submit"
          //onClick=""
>>>>>>> a18170bb39771eecffdfb00859b00f14da0246bd
          title="city"
          // backgroundImage="https"
        />
      </div>

<<<<<<< HEAD
      <div class="jumbotron" style={{backgroundImage : `url(https://images.pexels.com/photos/959314/pexels-photo-959314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`}}>
        <SearchBtn
          className="btn btn-lg"
          id="categorybtn button"
          type="submit"
          onClick={this.handleShow}
=======
      <div class="jumbotron">
        <SearchBtn
          className="btn btn-lg"
          id="categorybtn"
          type="submit"
          //onClick=""
>>>>>>> a18170bb39771eecffdfb00859b00f14da0246bd
          title="category"
          // backgroundImage="https"
        />
      </div>
<<<<<<< HEAD
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
}

export default SearchJumbo;
=======
    </div>
  );
}

export default SearchJumbo;
>>>>>>> a18170bb39771eecffdfb00859b00f14da0246bd
