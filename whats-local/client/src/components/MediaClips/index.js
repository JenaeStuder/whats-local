import React from "react";
import "./style.css";

export function MediaClip(props) {
    return (
        <div className="media">
            <div className="images">
                <img className="image" src={props.image} /> 
            </div>
            <div className="videos">
                <video className="video" src={props.video} /> 
            </div>
            <div className="audioFiles">
                <audio className="audio" src={props.audio} />
            </div>
        </div>
    );
}

//image server to save the pictures outsource any file saving