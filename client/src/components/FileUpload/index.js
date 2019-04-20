import React, { Component } from "react";
import API from '../../utils/API'


class FileUpload extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: props.id,
            imageURL: ''
        }

        this.profileChange = this.profileChange.bind(this);
    }

   profileChange = e => {
        let file = e.target.files[0];
        console.log(e.target.files[0]);
    
        
        //e.target.files.length > 0 && API.addMedia({file})
        // .then(res => console.log(res))
        // .catch(err => console.log(err.response.data));
        }
    render(){
        return (
            <div className="form-group">
                    {/* <label htmlFor={props.id}>{props.labeltext}</label> */}
                    <input
                        // name={props.name}
                        type="file"
                        // className="form-control"
                        // placeholder={props.placeholder}
                        id={this.state.id}
                        // onChange={this.profileChange}
                        onClick={(event) => {event.target.value = null}}
                    />
            </div>
        );
    }
}

export default FileUpload;