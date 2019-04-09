import React, { Component } from "react";
import "./load.css";
import TitleBackground from "./components/TitleBackground";
// import Login from "./components/Login";

class Home extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <TitleBackground />
      </div>
    );
  }
}

export default Home;
