import React from "react";
import "./style.css";

function Bio(props) {
    return(
        <div className="bio">
        {props.bio?<div className="biography"/>: null}
        </div>
    )
}
export default Bio;