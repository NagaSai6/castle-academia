import React from 'react'
import { Row, Col, Card, Button } from "react-bootstrap";
export default function AbroadModuleSection() {
  return (
    <div className="cs_container mx-auto" style={{ marginTop: "10px" }}>
    <h2>360° View on  Abroad Studies Module</h2>
    <div class="horizontal_dotted_line"></div>
    <p className="cs_desc">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
      nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
      volutpat. Ut wisi enim.Lorem ipsum dolor sit amet, consectetuer
      adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
      dolore magna aliquam erat volutpat. Ut wisi.
    </p>

    <Row className="mt-4">
      <Col md="4">
        <Card style={{ borderRadius: "15px" }} className="cs_card">
          <Card.Img className="cs_card_image" variant="top" src={""} />
          <Card.Body className="cs_card_body">
            <Card.Text className="cs_card_text">COLLEGE COUNSELLING</Card.Text>
          </Card.Body>
        </Card>
        <div className="cs_course_desc">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat. Ut wisi enim.
          </p>
        </div>
      </Col>

      {/* <Col md={3}>
        <Card style={{ borderRadius: "15px" }} className="cs_card">
          <Card.Img className="cs_card_image" variant="top" src={""} />
          <Card.Body className="cs_card_body">
            <Card.Text className="cs_card_text">HOW TO ENROLL COMPANY</Card.Text>
          </Card.Body>
        </Card>
        <div className="cs_course_desc">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat. Ut wisi enim.
          </p>
        </div>
      </Col> */}

      <Col md={4}>
        <Card style={{ borderRadius: "15px" }} className="cs_card">
          <Card.Img className="cs_card_image" variant="top" src={""} />
          <Card.Body className="cs_card_body">
            <Card.Text className="cs_card_text">EXAM COUNSEL( FREE)</Card.Text>
          </Card.Body>
        </Card>
        <div className="cs_course_desc">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat. Ut wisi enim.
          </p>
        </div>
      </Col>
      <Col md="4">
        <Card style={{ borderRadius: "15px" }} className="cs_card">
          <Card.Img className="cs_card_image" variant="top" src={""} />
          <Card.Body className="cs_card_body">
            <Card.Text className="cs_card_text">TRAINING IF NEEDED</Card.Text>
          </Card.Body>
        </Card>
        <div className="cs_course_desc">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat. Ut wisi enim.
          </p>
        </div>
      </Col>

    </Row>
    <Row className='mt-4'>
    <Col>
        <Card style={{ borderRadius: "15px" }} className="cs_card">
          <Card.Img className="cs_card_image" variant="top" src={""} />
          <Card.Body className="cs_card_body">
            <Card.Text className="cs_card_text">UNIVERSITY SHORTLISTING</Card.Text>
          </Card.Body>
        </Card>
        <div className="cs_course_desc">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat. Ut wisi enim.
          </p>
        </div>
      </Col>
      <Col>
        <Card style={{ borderRadius: "15px" }} className="cs_card">
          <Card.Img className="cs_card_image" variant="top" src={""} />
          <Card.Body className="cs_card_body">
            <Card.Text className="cs_card_text">VISA APPROVAL</Card.Text>
          </Card.Body>
        </Card>
        <div className="cs_course_desc">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat. Ut wisi enim.
          </p>
        </div>
      </Col>
    </Row>
  </div>
  )
}
