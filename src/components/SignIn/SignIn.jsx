import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import "./resources/css/signin.css";
import { useState } from "react";

export default function SignIn() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  function handleEmailChange(e) {
    setFormData({ ...formData, email: e.target.value });
  }
  function handlePasswordChange(e) {
    setFormData({ ...formData, password: e.target.value });
  }

  function handleSignInFormSubmission() {
    if (formData.email.length != 0 && formData.password.length) {
      // make  a post request
    } else {
     return ;
    }
  }

  return (
    <div className="signin_form_container">
      <div className="signin_form_sub_container">
        <h3 style={{ textAlign: "center" }} className="mb-3">
          Sign In
        </h3>
        <Form onSubmit={handleSignInFormSubmission}>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                onChange={handleEmailChange}
                required
                type="email"
                defaultValue=""
                placeholder="Enter your email"
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="10">
              <Form.Control
                onChange={handlePasswordChange}
                type="password"
                placeholder="Password"
                required
              />
            </Col>
          </Form.Group>
          <button type="submit" className="fsc_submit_button mx-auto">
            Sign In
          </button>
        </Form>
      </div>
    </div>
  );
}
