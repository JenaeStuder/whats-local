import React, { Component } from "react";
import Button from "../Button";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

const Favorites = props => {
  return (
    <div className="card text-center favorites-card">
      <div className="card-header">
        <h5 className="favorite-header">Favorited Artists</h5>
      </div>
      <div className="card-body">
        <h5 className="card-title" />
        <ul className="list-group list-group-flush">{props.favorites}</ul>
      </div>
    </div>
  );
};

export default Favorites;
