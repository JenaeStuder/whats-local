import React from "react";
import "./style.css";

function ProfilePicture(props){
    return(
        <div className="profilePic">
        {props.image?<img className="pic" src={props.image}/>: null}
        </div>
    )
}
export default ProfilePicture;