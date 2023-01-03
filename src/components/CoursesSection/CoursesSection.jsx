import React from "react";
import "./resources/css/coursessection.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import startup_plan_logo from "./resources/images/businessmanpana1.svg";
import abroad_studies_logo from "./resources/images/studyabroadpana1.svg";

export default function CoursesSection() {
  return (
    <div className="cs_container mx-auto">
      <h2>360° View on Courses We Offer</h2>
      <div class="horizontal_dotted_line"></div>
      <p className="cs_desc">
        Castle Academia is an EdTech start up with the team full of expertise
        who had worked closely with IIT Bombay, IIT Madras, IIT Kanpur, IIT
        Kharagpur, IIT Roorkee, BITS Pilani, NITs, JNTUH, GITAM (Vizag,
        Hyderabad), Mahindra University, G. Narayanamma Institute of Technology,
        GCET Colleges.
      </p>

      <Row>
        <Col>
          <Card style={{borderRadius : "15px"}} className="cs_card">
            <Card.Img className="cs_card_image" variant="top" src={startup_plan_logo} />
            <Card.Body className="cs_card_body">
              <Card.Text className="cs_card_text">CRT TRAINING</Card.Text>
            </Card.Body>
          </Card>
          <div className="cs_course_desc">
            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim.</p>
          </div>
        </Col>

        <Col>
          <Card style={{borderRadius : "15px"}} className="cs_card">
            <Card.Img className="cs_card_image" variant="top" src={startup_plan_logo} />
            <Card.Body className="cs_card_body">
              <Card.Text className="cs_card_text">START UP PLAN</Card.Text>
            </Card.Body>
          </Card>
          <div className="cs_course_desc">
            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim.</p>
          </div>
        </Col>

        <Col>
          <Card style={{borderRadius : "15px"}} className="cs_card">
            <Card.Img className="cs_card_image" variant="top" src={abroad_studies_logo} />
            <Card.Body className="cs_card_body">
              <Card.Text className="cs_card_text">ABROAD STUDIES</Card.Text>
            </Card.Body>
          </Card>
          <div className="cs_course_desc">
            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim.</p>
          </div>
        </Col>


      </Row>
    </div>
  );
}
