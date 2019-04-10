import React from "react";
import "./style.css";

function Bio(props) {
    return(
        <div className="bio">
        {props.bio}
        </div>
    )
}
export default Bio;