import React from "react";
import "./style.css";

function MediaClip(props)

{
    return (
        <div className="media-border-wrap" id= "media">
        {(function(){
            switch (props.mediaType){

            case "image":
                return <img className="media" src={props.url} />;
                break;
            case "video":
            return <video className="media" src={props.url} /> ;
                break;
            case "audio":
                return <audio className="media" src={props.url} />;
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