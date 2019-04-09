import React from "react";
import "./style.css";

export function ProfilePicture(props){
    return(
        <div className="profilePic">
        <img className="pic" src={props.image}/>
        </div>
    )
}