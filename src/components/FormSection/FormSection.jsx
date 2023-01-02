import React from "react";
import "./resources/css/form-section.css";
import formImage from "./resources/images/picture.svg";
import { Row, Col, Form, } from "react-bootstrap";
export default function FormSection() {
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
            <Form>
                <h2 className="my-3">Enter Details</h2>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email " />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" placeholder="Enter Phone number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="5" placeholder="Enter your Query" />
              </Form.Group>

              <button type="submit" className="fsc_submit_button">Submit</button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}
