import React from "react";


function Input(props) {
    return (
        <div className="form-group">
                {/* <label htmlFor={props.id}>{props.labeltext}</label> */}
                <input
                    name={props.name}
                    type={props.type}
                    className="form-control"
                    placeholder={props.placeholder}
                    id={props.id}
                />
        </div>
    );
}

export default Input;