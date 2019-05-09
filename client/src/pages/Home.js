import React, { Component } from "react";
import "../load.css";
import ControlledCarousel from "../components/ControlledCarousel";
import Background from "../assets/images/minimalism.jpg";

// import Login from "./components/Login";

class Home extends Component {
  render() {
    const style = {
      minWidth: "100vw",
      minHeight: "100vh",
      backgroundImage: `url(${Background})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      margin: 0
    };
    return (
      <div className="App" style={style}>
        <ControlledCarousel />
      </div>
    );
  }
}

export default Home;
