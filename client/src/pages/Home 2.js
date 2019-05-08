import React, { Component } from "react";
import "../load.css";
import ControlledCarousel from "../components/ControlledCarousel";

// import Login from "./components/Login";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <ControlledCarousel />
      </div>
    );
  }
}

export default Home;
