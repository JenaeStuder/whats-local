import React from "react";
import SearchJumbo from "../components/SearchJumbo";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Navbar from "../components/Navbar";
import "./Search.css";
import Container from "react-bootstrap/Container";
import Brand from "../components/Brand";

// class Search extends React.Component {

//     render() {
//       return (
//         <>
//           <Button variant="primary" onClick={this.handleShow}>
//             Launch demo modal
//           </Button>
//         </>
//       );
//     }
//   }
//   export default Search;
//   render(<Search />);

function Search() {
  return (
    <div>
      <Container>
        <div class="jumbotron jumbotron-fluid search-jumbo">
          <h1 class="display-4">Search by</h1>
        </div>
        <SearchJumbo />
      </Container>
      <Navbar />
    </div>
  );
}

export default Search;
