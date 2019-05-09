import React from "react";
import Input from "../Input";
import FileUpload from "../FileUpload";
import Select from "../Select";
import Button from "../Button";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function LoginForm(props) {
  return (
    <form className="signup">
      <Input
        id="username"
        labeltext="Username:"
        name="username"
        placeholder="Username"
        type="text"
      />
      <Input
        id="password"
        labeltext="Password:"
        name="password"
        placeholder="Password"
        type="password"
      />
      <Button
        className="btn btn-info btn-lg btn-block"
        id="login"
        type="submit"
        //onClick=""
        title="Login"
      />

      <label>Don't have an Account? </label>
      <a className="btn btn-dark btn-lg btn-block" href="/signup">
        Signup
      </a>
      <div class="g-signin2" data-onsuccess="onSignIn" />
    </form>
  );

}

export default LoginForm;
