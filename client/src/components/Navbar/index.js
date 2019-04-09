import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <i class="fas fa-home" />
      </a>
      <a className="navbar-brand" href="#">
        <i class="fas fa-search" />
      </a>
      <a className="navbar-brand" href="#">
        (<i class="fas fa-users" />)
      </a>
      <a className="navbar-brand" href="#">
        <i class="fas fa-heart" />
      </a>
    </nav>
  );
}

export default Navbar;
