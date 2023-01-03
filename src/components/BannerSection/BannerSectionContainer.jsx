import React from "react";
import "./resources/css/bannersection.css";
import { Row, Col } from "react-bootstrap";
import BannerCarousel from "./BannerCarousel";
import {data } from "./TeamData";
export default function BannerSectionContainer() {
  return (
    <div>
      <Row className="bs_parent-container g-0 align-items-center">
        <Col xs="12" lg ="6" cclassName="bs_text-container">
          <h5 className="bs_text_desc1">With Better Opportunity</h5>
          <h1 className="bs_text_desc2">2.5K+ STUDENTS</h1>
          <h1 className="bs_text_desc2">START WITH US</h1>
          <h5 className="bs_text_desc1">
            The Castle Academia is an EdTech start up with the team full of
            expertise, who had worked closely with so many well-known
            educational organizations.
          </h5>
          <button href="http://" className="bs_text-button">
            Get Started
          </button>
        </Col>
        <Col className="bs_team-heads-container justify-content-center d-flex" xs="12" lg="6">
            <BannerCarousel teamData = {data}/>
        </Col>
      </Row>
    </div>
  );
}
