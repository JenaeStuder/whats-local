import React, { Component } from "react";
import Input from "../Input";
import FileUpload from "../FileUpload";
import Select from "../Select";
import Button from "../Button";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class EditForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    zipcode: "",
    profilePicture: "",
    media: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <form className="signup">
        {/* <Input
          id="email"
          labeltext="Email:"
          name="email"
          placeholder="Email"
          type="email"
        /> */}
        <Input
          id="username"
          labeltext="Username:"
          name="username"
          placeholder="Username"
          type="text"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <Input
          id="firstName"
          labeltext="First Name:"
          name="firstName"
          placeholder="First Name"
          type="text"
          value={this.state.firstName}
          onChange={this.handleInputChange}
        />
        <Input
          id="lastName"
          labeltext="Last Name:"
          name="lastName"
          placeholder="Last Name"
          type="text"
          value={this.state.lastName}
          onChange={this.handleInputChange}
        />
        {/* <Input
          id="password"
          labeltext="Password:"
          name="password"
          placeholder="Password"
          type="password"
        />
        <Input
          id="confirmPassword"
          labeltext="Confirm Password:"
          name="confirmPassword"
          placeholder="Confirm Password"
          type="password"
        /> */}
        <Input
          id="zip"
          labeltext="Zipcode:"
          name="zip"
          placeholder="Zipcode"
          type="text"
          value={this.state.zipcode}
          onChange={this.handleInputChange}
        />
        <p id="subtitle">Change profile picture</p>
        <FileUpload
          id="profilepic"
          labeltext="Add Profile Picture:"
          name="profilepic"
          placeholder="Upload Profile Picture"
        />
        {/* <Select
          id="usertype"
          name="usertype"
          labeltext="Are You An Artist?"
          title="Are You An Artist?"
          className="form-control"
          placeholder="Yes"
          options={["Yes", "No"]}
        /> */}
        <Button
          className="btn btn-info btn-lg btn-block"
          id="edit"
          type="submit"
          //onClick=""
          title="Done"
        />
        <div class="g-signin2" data-onsuccess="onSignIn" />
      </form>
    );
  }
}

export default EditForm;
