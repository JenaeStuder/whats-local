import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";
import LoginForm from "../components/LoginForm";
import Container from "../components/Container";
//import Row from "../components/Row";
//import Col from "../components/Col";
//import Jumbotron from "../components/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
//import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "./Signup.css";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/profile");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/profile"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <Row>
          <Col size="md-6">
            <div >
              <h1 id="title">what's</h1>
              <h1 id="title">local</h1>
            </div>
            <p id="subtitle">We missed you</p>
            <Card>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                    placeholder="Enter your Email"
                    className={classnames("form-control", {
                      invalid: errors.email || errors.emailnotfound
                    })}
                  />
                  <span className="red-text">
                    {errors.email}
                    {errors.emailnotfound}
                  </span>
                </div>
                <div className="form-group">
                  <input
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    type="password"
                    placeholder="Enter your Password"
                    className={classnames("form-control", {
                      invalid: errors.password || errors.passwordincorrect
                    })}
                  />
                  <span className="red-text">
                    {errors.password}
                    {errors.passwordincorrect}
                  </span>
                </div>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <button
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem"
                    }}
                    type="submit"
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                    Login
                  </button>
                </div>
                <a id="subtitle" href="/signup">Don't have an Account? </a>
                {/* <Button
                  className="btn btn-dark btn-lg btn-block"
                  id="signup"
                  type="submit"
                  //onClick=""
                  title="Signup"
                /> */}
                <div class="g-signin2" data-onsuccess="onSignIn" />
              </form>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  user: state.user
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);