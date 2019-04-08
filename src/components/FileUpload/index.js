import React from "react";


function FileUpload(props) {
    return (
        <div className="form-group">
                <label htmlFor={props.id}>{props.labeltext}</label>
                <input
                    name={props.name}
                    type="file"
                    className="form-control"
                    placeholder={props.placeholder}
                    id={props.id}
                />
        </div>
    );
}

export default FileUpload;