import React from "react";
import SearchJumbo from "../components/SearchJumbo";
<<<<<<< HEAD
=======
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

>>>>>>> 7bdf330e0b8a22b3f38b2dfc5e003976707cdedc

function Search() {
  return (
    <div>
      <div class="jumbotron jumbotron-fluid search-jumbo">
        <h1 class="display-4">Search by</h1>
      </div>
      <SearchJumbo />
    </div>
  );
}

export default Search;
