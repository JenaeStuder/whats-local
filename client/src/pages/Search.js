import React from "react";
import SearchJumbo from "../components/SearchJumbo";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Navbar from "../components/Navbar";
import "./Search.css";
import BackgroundImage from "../components/BackgroundImage"
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
    <div className= "Background">
      <div class="jumbotron jumbotron-fluid search-jumbo">
        <h1 class="display-3">SEARCH BY:</h1>
      </div>
      <SearchJumbo />
      <Navbar />
    </div>
  );
}

export default Search;
