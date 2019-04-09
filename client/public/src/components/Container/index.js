import React from "react";
import "./style.css";


function Container({ fluid }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}> </div>;
}


export default Container;