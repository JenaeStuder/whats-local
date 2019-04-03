import React from "react";
import "./style.css";
import API from "../../utils/API";
import ProfilePicture from "../ProfilePicture";

class Info extends Component {
    state = {
      firstName: "",
      lastName:"",
      socialMediaHandles: "",
      bio:""
    };
    componentDidMount(){
    this.loadInfo();
    }

    loadInfo = ()=>{
        API.getInfo().then(res => this.setState({
            firstName: res.data,
            lastName: "",
            socialMediaHandles:"",
            bio:""
            })
        ).catch(err => console.log(err));
    };


render(){
    return(
        <container fluid>
        <Row>
            <col size="md-6"></col>
            <col size="md-6">
            
            
            </col>
        </Row>
        
        
        
        
        </container>
    )
}

}