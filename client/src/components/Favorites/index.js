import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Card from "react-bootstrap/Card";
import "./style.css";

function Favorites(props) {
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-12">
            <div bg="light" text="white" id="content">
              <h5 id="card-header">Favorite Artists</h5>

              <p id="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
                ;kasd;flkjasldkfj;askdjf;laksjdf;lkjads;lkfja;lskdjfl;kjasdkfja;sdlkjfa
                kasd;flkjasd;lfkja;lsdkjf;laksjdf;lkjasd;lfkja;dlskjf;ladsjfasd
                asdkjfal;ksdjf;lkajsd;lfkja;sdlkjf;laksjdf;lkajsd;ljqw;neaovansvknaslkv
                askdnnwOEBNVAOSIJBO;AJNSBOUIAEHW'BANSDLJKFASDJFLKJADSLKFJ;OWINVALK;SDFJASDKLJLJ;
                lakjfldskjfl;kajsiubjbna'wekfnv;iueijanvnae;oivlnaoevne
              </p>
            </div>
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Favorites;
