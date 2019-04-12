import React from "react";
import "./style.css";

function Favorites(props){
    return(
        <div className="favorites">
        {props.favorites}
        </div>
    )
    
}

export default Favorites;