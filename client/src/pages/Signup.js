import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";
import SignUpForm from "../components/SignUpForm";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "./Signup.css";
import Brand from "../components/Brand";


class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password2: "",
      zipCode: "",
      userType: "",
      errors: {}
    };
  }

  componentWillReceiveProps(nextProps) {
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
    const newUser = {
      userName: this.state.userName,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      zipCode: this.state.zipCode,
      userType: this.state.userType
    };
    console.log(newUser);
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <Container>
        <Row>
          <Brand/>
        </Row>
        <Row>
          <Col size="md-6">

            {/* <div class="jumbotron jumbotron-fluid whats-local-jumbo"> */}
              <h1 id="title">what's local</h1>
              {/* <h1 id="title">local</h1> */}
            {/* </div> */}

            <p id="subtitle">Join the community !</p>
            <p id="subtitle">(it's long, but it's worth it)</p>
            <Card>
              <form noValidate onSubmit={this.onSubmit} className="signup">
                <div className="form-group">
                  <input
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    placeholder="Email Address"
                    type="email"
                    className={classnames("form-control", {
                      invalid: errors.email
                    })}
                  />
                  <span className="red-text">{errors.email}</span>
                </div>
                <div className="form-group">
                  <input
                    onChange={this.onChange}
                    value={this.state.userName}
                    error={errors.userName}
                    id="userName"
                    placeholder="User Name"
                    type="text"
                    className={classnames("form-control", {
                      invalid: errors.userName
                    })}
                  />
                  <span className="red-text">{errors.userName}</span>
                </div>
                <div className="form-group">
                  <input
                    onChange={this.onChange}
                    value={this.state.firstName}
                    error={errors.firstName}
                    id="firstName"
                    placeholder="First Name"
                    type="text"
                    className={classnames("form-control", {
                      invalid: errors.firstName
                    })}
                  />
                  <span className="red-text">{errors.firstName}</span>
                </div>
                <div className="form-group">
                  <input
                    onChange={this.onChange}
                    value={this.state.lastName}
                    error={errors.lastName}
                    id="lastName"
                    placeholder="Last Name"
                    type="text"
                    className={classnames("form-control", {
                      invalid: errors.lastName
                    })}
                  />
                  <span className="red-text">{errors.lastName}</span>
                </div>
                <div className="form-group">
                  <input
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    placeholder="Password"
                    type="password"
                    className={classnames("form-control", {
                      invalid: errors.password
                    })}
                  />
                  <span className="red-text">{errors.password}</span>
                </div>
                <div className="form-group">
                  <input
                    onChange={this.onChange}
                    value={this.state.password2}
                    error={errors.password2}
                    id="password2"
                    placeholder="Confirm Password"
                    type="password"
                    className={classnames("form-control", {
                      invalid: errors.password2
                    })}
                  />
                  <span className="red-text">{errors.password2}</span>
                </div>
                <div className="form-group">
                  <input
                    onChange={this.onChange}
                    value={this.state.zipCode}
                    error={errors.zipCode}
                    id="zipCode"
                    placeholder="Zip Code"
                    type="text"
                    className={classnames("form-control", {
                      invalid: errors.zipCode
                    })}
                  />
                  <span className="red-text">{errors.zipCode}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="userType">Are You an Artist?</label>
                  <select
                    onChange={this.onChange}
                    value={this.state.userType}
                    error={errors.userType}
                    id="userType"
                    placeholder="Choose One..."
                    className={classnames("form-control", {
                      invalid: errors.userType
                    })}
                  >
                    <option value="" disabled>Choose One...</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                  <span className="red-text">{errors.userType}</span>
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
                    Sign up
                </button>
                </div>
                <a id="subtitle" href="/login">Already have an Account? </a>
              </form>
            </Card>
          </Col>
        </Row>


        {/* <Container>
                <Row>
                    {/* <Col className="image">
                
                    </Col> */}
        {/* <Col>
                    <Jumbotron fluid>
                            <Container>
                                <h1>what's local?</h1>
                                <h3>
                                    Sign Up
                                </h3>
                            </Container>
                    </Jumbotron>
                    <Card>
                        <Card.Body>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control type="text" placeholder="Full Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control as="select">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container> */}
            </Container>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(SignUp));