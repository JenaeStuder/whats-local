import React from "react";
import "./style.css";

function ProfilePicture(props){
    return(
        <div className="profilePic">
        <img className="pic" src={props.image}/>
        </div>
    )
}
export default ProfilePicture;