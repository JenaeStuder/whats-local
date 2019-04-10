import React from "react";

function Splash() {
  return (
    <div>
      <div class="jumbotron jumbotron-fluid" id="main-title">
      <div class="container">
        <a class="btn btn-dark" href="/logout">Login</a>
        <a class="btn btn-dark" href="/logout">Signup</a>
        <hr />
        <h1 class="display-4">What's Local</h1>
        <p class="lead">
          Find | Local | Art
        </p>
      </div>
    </div>
    <div class="jumbotron jumbotron-fluid" id="artwork-jumbotron-top">
      <div class="container"></div>
    </div>
    <div class="jumbotron jumbotron-fluid" id="search-jumbotron">
      <div class="container">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search for..." />
          <span class="input-group-btn">
            <button class="btn btn-search" type="button">
              <i class="fa fa-search fa-fw"></i> Search
            </button>
          </span>
        </div>
      </div>
    </div>
    <div class="jumbotron jumbotron-fluid" id="artwork-jumbotron-bottom">
      <div class="container"></div>
    </div>
    </div>
  );
}

export default Splash;
