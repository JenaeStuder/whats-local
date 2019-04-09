import React from "react";
import Searchbar from "../Searchbar";
import Login from "../Login";

function TitleBackground() {
  return (
    <div className="container-fluid" id="titleBackground">
      <Login />
      <div className="jumbotron jumbotron-fluid" id="title-jumbo">
        <div className="container">
          <h1 className="display-3">what's local?</h1>
          <p className="lead">connect | local | art</p>
        </div>
      </div>
      <Searchbar />
    </div>
  );
}

export default TitleBackground;
