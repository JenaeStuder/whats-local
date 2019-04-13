import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="nav-item nav-link navbar-brand" href="#">
        <i class="fas fa-home" />
      </a>
      <a className="nav-item nav-link navbar-brand" href="#">
        <i class="fas fa-search" />
      </a>
      <a className="nav-item nav-link navbar-brand" href="#">
        <i class="fas fa-users" />
      </a>
        <a className="nav-item nav-link navbar-brand" href="#">
            <i class="fas fa-heart" />
        </a>
        <a className="nav-item nav-link navbar-brand" href="#">
            <i class="fas fa-edit"></i>
        </a>
    </nav>
  );
}

export default Navbar;
