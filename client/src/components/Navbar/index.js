import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark" id="nav">
      <a className="nav-item nav-link navbar-brand" href="/main">
        <i class="fas fa-home" />
      </a>
      <a className="nav-item nav-link navbar-brand" href="/search">
        <i class="fas fa-search" />
      </a>
      <a className="nav-item nav-link navbar-brand" href="/user">
        <i class="fas fa-users" />
      </a>
        <a className="nav-item nav-link navbar-brand" href="#">
            <i class="fas fa-heart" />
        </a>
        <a className="nav-item nav-link navbar-brand" href="/edit">
            <i class="fas fa-edit"></i>
        </a>
        {/* <a className="nav-item nav-link navbar-brand">
            <i class="fas fa-sign-out-alt"></i>
        </a> */}
    </nav>
  );
}

export default Navbar;
