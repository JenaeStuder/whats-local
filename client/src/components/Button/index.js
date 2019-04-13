import React from "react";

const Button = (props) => {
    console.log(props.style);
    return(
        <button 
            className= {props.className} 
            onClick= {props.action}>    
            {props.title} 
        </button>)
}

export default Button;