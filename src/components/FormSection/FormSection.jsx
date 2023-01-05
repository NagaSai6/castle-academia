import React from "react";
import "./resources/css/form-section.css";
import formImage from "./resources/images/picture.svg";
import { Row, Col, Form, Alert} from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Circles } from "react-loader-spinner";


export default function FormSection() {
  const [formSubmit, setFormSubmit] = useState(false);
  const [isFormSubmitted,setIsFormSubmitted] = useState(false);
  const [formData,setFormData] = useState({
    name : '',
    email : '',
    phone : '',
    message : ''
  })

  function handleMessageChange(e){
      setFormData({...formData,message : e.target.value});
  }
  function handleNameChange(e){
    setFormData({...formData,name : e.target.value});
  }
  function handleEmailChange(e){
    setFormData({...formData,email : e.target.value});
  }
  function handlePhoneChange(e){
    setFormData({...formData,phone : e.target.value});
  }
  function handleFormSubmit(e){
    e.preventDefault();
    setIsFormSubmitted(false);
    setFormSubmit(true);
    const configuration = {
      method: "post",
      url: "https://castle-academia-server.onrender.com/send-mail-form-submission",
      data: formData
    };

    axios(configuration).then((result)=>{
      setFormSubmit(false);
      setIsFormSubmitted(true)
      setFormData({
        name : '',
        email : '',
        phone : '',
        message : ''
      });

      console.log(result)
           
    }).catch((err)=>{
      setFormSubmit(false);
      console.log(err)
    })
  }
  return (
    <div className="fsc_container">
      <Row>
        <Col className="fsc_image">
          <div>
            <img className="fsc_image" src={formImage} />
          </div>
        </Col>
        <Col>
          <div className="fsc_form_container">
            {isFormSubmitted && <Alert key={'sucess'} variant="success" />}
            <Form onSubmit={handleFormSubmit}>
                <h2 className="my-3">Enter Details</h2>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control value={formData.name} type="text" placeholder="Enter Name" className="fsc_control" required  onChange={handleNameChange}/>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={formData.email} type="email" placeholder="Enter Email " className="fsc_control"  required onChange={handleEmailChange}/>
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Phone</Form.Label>
                <Form.Control value={formData.phone} type="number" placeholder="Enter Phone number" className="fsc_control" required onChange={handlePhoneChange}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Message</Form.Label>
                <Form.Control value={formData.message} as="textarea" rows="5" placeholder="Enter your Query" className="fsc_control" onChange={handleMessageChange} />
              </Form.Group>

              <button type="submit" className="fsc_submit_button">
              {formSubmit && <Circles height={20} width={20} color="#000"/>} Submit</button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}
