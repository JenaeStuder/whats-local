import React from "react";
import "./style.css";

export function Bio(props) {
    return(
        <div className="bio">
        {props.bio}
        </div>
    )
}