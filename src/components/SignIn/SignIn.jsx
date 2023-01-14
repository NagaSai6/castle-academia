import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Cookies from "universal-cookie";
import { Circles } from "react-loader-spinner";
import "./resources/css/signin.css";
import { useState } from "react";
import axios from "axios";
import validator from "validator";

export default function SignIn() {

  const cookies = new Cookies();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [login,setLogin] = useState(false)

  function handleEmailChange(e) {
    setFormData({ ...formData, email: e.target.value });
  }
  function handlePasswordChange(e) {
    setFormData({ ...formData, password: e.target.value });
  }

  function handleSignInFormSubmission(e) {
    e.preventDefault();
   
    
    if (formData.email.length != 0 && formData.password.length) {

      if(!validator.isEmail(formData.email)){
        setLogin(false);
        return alert("Invalid Email Address")
      }
      setLogin(true);
      // make  a post request
      const configuration = {
        method: "post",
        url: "https://castle-academia-server.onrender.com/sign-in",
        // url : "https://castle-academia-server.onrender.com",
        data: {
          email : formData.email,
          password : formData.password,
        },
      };
      axios(configuration).then((result)=>{
           setLogin(true);
           cookies.set("auth-token", result.data.token, {
            path: "/",
          });
          window.location.href = '/courses-overview';
      }).catch((e)=>{
        console.log(e)
         alert("Sign in Failed - Incorrect password");
         setLogin(false);
      })
    } else {
     return ;
    }
  }

  return (
    <div className="signin_form_container">
      <div className="signin_form_sub_container">
        <h3 style={{ textAlign: "center" }} className="mb-3">
          Register & Login
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
                value={formData.email}
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
                value={formData.password}
                type="password"
                placeholder="Password"
                required
              />
            </Col>
          </Form.Group>
          <button type="submit" className="fsc_submit_button mx-auto">
           {login &&  <Circles height={20} width={20} color="#000"/>}
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}
