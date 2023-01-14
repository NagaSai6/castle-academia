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
      <p className="cs_desc mb-3">
      The most crucial component of career transition is determining which professional route is meant for you and receiving expert's advice on that track
      </p>

      <Row>
        <Col md={4}>
          <Card style={{borderRadius : "15px",width : ""}}  className="cs_card">
            <Card.Img className="cs_card_image" variant="top" src={startup_plan_logo} />
            <Card.Body className="cs_card_body">
              <Card.Text className="cs_card_text">CRT TRAINING</Card.Text>
            </Card.Body>
          </Card>
          <div className="cs_course_desc">
            <p>Learn core industry skills from top edtech instructors.We assist in hunting new job opportunities and our expertise helps you land on dream job through mentoring in networking, interviewing, and placement techniques.</p>
          </div>
        </Col>

        <Col md={4}>
          <Card style={{borderRadius : "15px"}} className="cs_card">
            <Card.Img className="cs_card_image" variant="top" src={startup_plan_logo} />
            <Card.Body className="cs_card_body">
              <Card.Text className="cs_card_text">START UP PLAN</Card.Text>
            </Card.Body>
          </Card>
          <div className="cs_course_desc">
            <p> We personally  assist & modify plan according to your ideation followed by building startup from scratch to seed funding which includes leadership management ,pitch and product readiness, 1:1 session with CEO's.</p>
          </div>
        </Col>

        <Col md={4}>
          <Card style={{borderRadius : "15px"}} className="cs_card">
            <Card.Img className="cs_card_image" variant="top" src={abroad_studies_logo} />
            <Card.Body className="cs_card_body">
              <Card.Text className="cs_card_text">ABROAD STUDIES</Card.Text>
            </Card.Body>
          </Card>
          <div className="cs_course_desc">
            <p> Discover and interact with Alumni of your dream college who once travelled the same route as you.
We provide A-Z overseas services, from assisting you in selecting the best university to enrolling in it
</p>
          </div>
        </Col>


      </Row>
    </div>
  );
}
