import React, { Component } from "react";
import Button from "../Button";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

const Favorites = props => {
  return (
    <div class="card text-center favorites-card">
      <div class="card-header">
        <h5>Favorited Artists</h5>
      </div>
      <div class="card-body">
        <h5 class="card-title" />
        <ul class="list-group list-group-flush">{props.favorites}</ul>
      </div>
    </div>
  );
};

export default Favorites;
