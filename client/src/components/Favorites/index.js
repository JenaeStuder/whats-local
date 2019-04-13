import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Card from "react-bootstrap/Card";
import "./style.css";

function Favorites(props){
    return(
        <div className="favorites">
        {props.favorites}
        </div>
    )
    
}

export default Favorites;