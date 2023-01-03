import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

export default function CRTModuleSection() {
  return (
    <div className="cs_container mx-auto" style={{ marginTop: "85px" }}>
      <h2>360° View on CRT Module</h2>
      <div class="horizontal_dotted_line"></div>
      <p className="cs_desc">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat. Ut wisi enim.Lorem ipsum dolor sit amet, consectetuer
        adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
        dolore magna aliquam erat volutpat. Ut wisi.
      </p>

      <Row className="mt-4">
        <Col>
          <Card style={{ borderRadius: "15px" }} className="cs_card">
            <Card.Img className="cs_card_image" variant="top" src={""} />
            <Card.Body className="cs_card_body">
              <Card.Text className="cs_card_text">CAREER COUNSELLING</Card.Text>
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
              <Card.Text className="cs_card_text">Mock Interview</Card.Text>
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
              <Card.Text className="cs_card_text">RESUME REVIEW</Card.Text>
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
              <Card.Text className="cs_card_text">ABROAD STUDIES</Card.Text>
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
  );
}
