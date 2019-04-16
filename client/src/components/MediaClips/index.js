import React from "react";
import "./style.css";

function MediaClip(props)

{
    return (
        <div className="media-border-wrap" id= "media">
        {(function(){
            switch (props.media){

            case "1":
                return <img className="media" src={props.media} />;
                break;
            case "2":
            return <video className="media" src={props.media} /> ;
                break;
            case "3":
                return <audio className="media" src={props.media} />;
                default:
                return null;
            }
        }
        )()}
            </div>
        
    );
}
export default MediaClip;

//image server to save the pictures outsource any file saving