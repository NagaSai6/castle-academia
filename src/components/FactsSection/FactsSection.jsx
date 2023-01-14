import React from "react";
import "./resources/css/facts.css";
import { Row, Col } from "react-bootstrap";

export default function FactsSection() {
  return (
    <div className="fs_container">
      <h1>Our Standout Progress</h1>
      <div style={{ width: "12%" }} class="horizontal_dotted_line"></div>
      {/* <p className="fs_desc">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </p> */}

      <div className="fs_cards_container">
        <Row>
          <Col>
            <div className="fs_cards">
              <h6 className="fs_header_name">Students</h6>

              <h2 className="fs_header_metric">2.5K+</h2>

              <p className="fs_cards_desc">Number of students successfully enrolled</p>
            </div>
          </Col>
          <Col>
            <div className="fs_cards">
              <h6 className="fs_header_name">Courses</h6>

              <h2 className="fs_header_metric">10+</h2>

              <p className="fs_cards_desc">We provide a wide range of more than 10+ courses that cater to the interests of each individual student in the class.</p>
            </div>
          </Col>
          <Col>
            <div className="fs_cards">
              <h6 className="fs_header_name">Instructors</h6>

              <h2 className="fs_header_metric">200+</h2>

              <p className="fs_cards_desc">We have top-tier professionals experts who hold no less than 15+ years of experience in the respective field.</p>
            </div>
          </Col>
          {/* <Col>
            <div className="fs_cards">
              <h6 className="fs_header_name">Success</h6>

              <h2 className="fs_header_metric">98%</h2>

              <p className="fs_cards_desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
            </div>
          </Col> */}
        </Row>
      </div>
    </div>
  );
}
