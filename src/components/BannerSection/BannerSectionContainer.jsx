import React from "react";
import "./resources/css/bannersection.css";
import { Row, Col } from "react-bootstrap";
import BannerCarousel from "./BannerCarousel";
import {data } from "./TeamData";
export default function BannerSectionContainer() {
  return (
    <div>
      <Row className="bs_parent-container g-0 align-items-center">
        <Col xs="12" lg ="6" className="bs_text-container">
          <h1 className="bs_text_desc2">2.5K+ students</h1>
          <h1 className="bs_text_desc2">Kickstarted career with us </h1>
          <h5 className="bs_text_desc1"><b>"IF IT SCARES YOU, IT MIGHT BE A GOOD THING TO TRY "</b></h5>
          <h1 className="bs_text_desc1">
          The Castle Academia  is an EdTech startup with the team full of expertise who had worked closely with IIT Bombay,IIT Madras,IIT Kanpur, IIT Kharagpur  IIT Roorkee, BITS Pilani, NITs & 20+ colleges national wide.
          </h1>
          {/* <h5 className="bs_text_desc1">
          
          </h5> */}
          <a role={'button'} href="#courses_section" className="bs_text-button">
            Get Started
          </a>
        </Col>
        <Col className="bs_team-heads-container justify-content-center d-flex" xs="12" lg="6">
            <BannerCarousel teamData = {data}/>
        </Col>
      </Row>
    </div>
  );
}
