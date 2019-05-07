import React from "react";
import Input from "../Input";
import FileUpload from "../FileUpload";
import Select from "../Select";
import Button from "../Button";
import "./style.css";
import API from '../../utils/API';

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SignUpForm(props) {
  
  function submitFunc(e) {
    e.preventDefault();
    let file = document.getElementById("profilepic").files[0];
    console.log(file);

    API.submitArtist({
      email: document.getElementById("email").value,
      username: document.getElementById("username").value,
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      password: document.getElementById("password").value,
      zip: document.getElementById("zip").value
    }).then(data => {
      console.log(data, data.data._id, file);
      (file > 0) ?  API.addMedia({ id: data.data._id, file: file }) : console.log("no file uploaded");
      ;
    });
  }          
  

  return (
    <form className="signup">
      <Input
        id="email"
        labeltext="Email:"
        name="email"
        placeholder="Email"
        type="email"
      />
      <Input
        id="username"
        labeltext="Username:"
        name="username"
        placeholder="Username"
        type="text"
      />
      <Input
        id="firstName"
        labeltext="First Name:"
        name="firstName"
        placeholder="First Name"
        type="text"
      />
      <Input
        id="lastName"
        labeltext="Last Name:"
        name="lastName"
        placeholder="Last Name"
        type="text"
      />
      <Input
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
      />
      <Input
        id="zip"
        labeltext="Zipcode:"
        name="zip"
        placeholder="Zipcode"
        type="text"
      />
      <p id="subtitle">
        This is your profile picture <br /> Choose wisely :
      </p>
      <FileUpload
        id="profilepic"
        labeltext="Add Profile Picture:"
        name="profilepic"
        placeholder="Upload Profile Picture"
      />
      <Select
        id="usertype"
        name="usertype"
        // labeltext="Are You An Artist?"
        title="Are You An Artist?"
        className="form-control"
        placeholder="Yes"
        options={["Yes", "No"]}
      />
      <Button
        className="btn"
        id="signup"
        type="submit"
        //onClick=""
        title="Signup"
      />

      <label>Already have an Account?</label>

      <Button
        className="btn"
        id="signup"
        // type="submit"
        action={submitFunc}
        title="Signup"
      />
      <div class="g-signin2" data-onsuccess="onSignIn" />
    </form>
  );
}

export default SignUpForm;
