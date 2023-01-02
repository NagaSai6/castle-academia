import React from "react";
import "./resources/css/bannersection.css";
import { Row, Col, Carousel } from "react-bootstrap";
import BannerCarousel from "./BannerCarousel";
import {data } from "./TeamData";
export default function BannerSectionContainer() {
  return (
    <div>
      <Row className="bs_parent-container">
        <Col xs="12" className="bs_text-container">
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
        <Col className="bs_team-heads-container">
            <BannerCarousel teamData = {data}/>
        </Col>
      </Row>
    </div>
  );
}
