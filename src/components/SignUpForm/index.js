import React from "react";
import Input from "../Input";
import FileUpload from "../FileUpload";
import Select from "../Select";
import Button from "../Button";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SignUpForm(props) {

    return (
        <form className="signup">
            <Input 
                id="name"
                labeltext="Full Name:"
                name="name"
                placeholder="Full Name"
            />
            <Input 
                id="username"
                labeltext="Username:"
                name="username"
                placeholder="Username"
            />
            <Input 
                id="password"
                labeltext="Password:"
                name="password"
                placeholder="Password"
            />
            <Input 
                id="zip"
                labeltext="Zipcode:"
                name="zip"
                placeholder="Zipcode"
            />
            <FileUpload
                id="profilepic"
                labeltext="Add Profile Picture:"
                name="profilepic"
                placeholder="Upload Profile Picture"
            />
            <Select
                id="usertype"
                name="usertype"
                title="Select Account Type"
                className="form-control"
                placeholder="Select Account Type"
                options = {["Artist", "Consumer"]}
            />
            <Button
                className="btn btn-warning btn-lg btn-block"
                id="login"
                type="submit"
                //onClick=""
                title="Login"
            />
            <Button
                className="btn btn-dark btn-lg btn-block"
                id="signup"
                type="submit"
                //onClick=""
                title="Signup"
            />
            <div class="g-signin2" data-onsuccess="onSignIn"></div> 
        </form>
    );
}

export default SignUpForm;
