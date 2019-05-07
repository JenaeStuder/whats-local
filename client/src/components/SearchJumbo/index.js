import React, { Component } from "react";
import SearchBtn from "../SearchBtns";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Searchbar from "../Searchbar";
import "./style.css";

class SearchJumbo extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      title: ""
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(title) {
    this.setState({ show: true, title: title });
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <div
              class="jumbotron jumbo-image"
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`
              }}
            >
              <SearchBtn
                className="btn btn-lg search-jumbo-button"
                id="artistBtn button"
                type="submit"
                onClick={() => {
                  this.handleShow("artist");
                }}
                title="Artist"
                // backgroundImage="https"
              />
            </div>

            <div
              class="jumbotron jumbo-image"
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`
              }}
            >
              <SearchBtn
                className="btn btn-lg search-jumbo-button"
                id="cityBtn button"
                type="submit"
                onClick={() => {
                  this.handleShow("city");
                }}
                title="City"
                // backgroundImage="https"
              />
            </div>

            <div
              class="jumbotron jumbo-image"
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/959314/pexels-photo-959314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`
              }}
            >
              <SearchBtn
                className="btn btn-lg search-jumbo-button"
                id="categorybtn button"
                type="submit"
                onClick={() => {
                  this.handleShow("category");
                }}
                title="Category"
                // backgroundImage="https"
              />
            </div>
          </Card.Body>
        </Card>
        <Modal show={this.state.show} onHide={this.handleClose}>
          {console.log(this)}
          <Modal.Header closeButton />
          {this.state.title === "artist" ? (
            <Modal.Title className="modal-title"> Find Artists </Modal.Title>
          ) : this.state.title === "city" ? (
            <Modal.Title className="modal-title"> Find Your City </Modal.Title>
          ) : (
            <Modal.Title className="modal-title">
              {" "}
              Find by Category{" "}
            </Modal.Title>
          )}
          
          <Searchbar />
          <Modal.Footer className="modal-footer">
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SearchJumbo;
