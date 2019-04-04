import React from "react";
import "./style.css";

export function profilePicture(props){
    return(
        <div className="profilePic">
        <img className="pic" src={props.image}/>
        </div>
    )
}