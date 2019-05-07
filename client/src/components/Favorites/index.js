import React, { Component } from "react";
import Button from "../Button";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

function Favorites() {
  //This is just an example array for now
  var favesArray = ["Artie the Great", "Jenae Sunflower", "TonyTony"];

  return (
    <div className="card text-center favorites-card">
      <div className="card-header">
        <h5 className="favorite-header">Favorited Artists</h5>
      </div>
      <div className="card-body">
        <h5 className="card-title" />
        <ul className="list-unstyled">
          {favesArray.map((value, index) => {
            return (
              <li className="fave-artist" key={index}>
                {value}{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Favorites;
