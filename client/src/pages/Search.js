import React from "react";
<<<<<<< HEAD
import SearchJumbo from "../components/SearchJumbo";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Search.css";

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

=======
import SearchJumbo from "../SearchJumbo";
>>>>>>> a18170bb39771eecffdfb00859b00f14da0246bd

function Search() {
  return (
    <div>
      <div class="jumbotron jumbotron-fluid">
        <h1 class="display-4">Search by</h1>
      </div>
      <SearchJumbo />
    </div>
  );
}

export default Search;
