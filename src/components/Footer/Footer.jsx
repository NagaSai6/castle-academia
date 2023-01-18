import React from "react";
import "./resources/css/footer.css";
import facebookLogo from "../BannerSection/resources/images/facebook.png";
import linkedInLogo from "../BannerSection/resources/images/linkedin.png";
import twitterLogo from "../BannerSection/resources/images/twitter.png";
import instagramLogo from "../BannerSection/resources/images/instagram.png";
import discordLogo from "./resources/images/discord.png";
import whatsappLogo from "../BannerSection/resources/images/whatsapp.png";
import fingerIcon from "./resources/images/finger.svg";
import contactLogo from "./resources/images/contact.svg";
import emailLogo from "./resources/images/email.svg";
import locationLogo from "./resources/images/location.svg";
import { FiSend } from "react-icons/fi";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Row, Col } from "react-bootstrap";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <Row className="fc_sub_container g-0">
        <Col style={{ justifyContent: "center" }}>
          <h1 className="fc_part1_h1">
            CASTLE <span className="fc_part1_header">ACADEMIA</span>
          </h1>
          <p className="fc_part1_desc mb-2">A home for your dream career</p>

          <p style={{ display: "inline-flex" }}>
            Copyright @ {year} Castle Academia.
          </p>
          <p>All rights reserved.</p>
          <div className="fc_team_social_media my-2">
            <a className="fc_social_media_button" href="https://www.facebook.com/profile.php?id=100089498376775">
              <img className="bs_social_media_icon" src={facebookLogo} />
            </a>
            <a className="fc_social_media_button" href="https://www.linkedin.com/in/castle-academia-093877261">
              <img className="bs_social_media_icon" src={linkedInLogo} />
            </a>
            {/* <a className="fc_social_media_button" href="">
              <img className="bs_social_media_icon" src={twitterLogo} />
            </a> */}
            <a className="fc_social_media_button" href="https://instagram.com/castle_academia?igshid=Yzg5MTU1MDY=">
              <img className="bs_social_media_icon" src={instagramLogo} />
            </a>
            <a target="_blank"  className="fc_social_media_button" href="https://chat.whatsapp.com/IpW1IfXOmv4EVIHM61wITY">
                <img className="bs_social_media_icon" src={whatsappLogo} />
              </a>
            {/* <a className="fc_social_media_button" href="">
              <img className="bs_social_media_icon" src={discordLogo} />
            </a> */}
          </div>
        </Col>

        <Col lg={2} className="fc_services_section">
          <h4>Sevices</h4>
          <div style={{ display: "flex" }} className="fc_common_div">
            <img src={fingerIcon} alt="" srcset="" />
            <p className="mx-2">CRT Training</p>
          </div>
          <div style={{ display: "flex" }} className="fc_common_div">
            <img src={fingerIcon} alt="" srcset="" />
            <p className="mx-2">Start Up Plan</p>
          </div>
          <div style={{ display: "flex" }} className="fc_common_div">
            <img src={fingerIcon} alt="" srcset="" />
            <p className="mx-2">Abroad Studies</p>
          </div>
        </Col>

        <Col lg={2} className="fc_services_section">
          <h4>Addresss</h4>
          <div style={{ display: "flex" }} className="fc_common_div">
            <img src={locationLogo} alt="" srcset="" />
            <p className="mx-1">373 William Blvd, MA 2721 , USA</p>
          </div>
          <div style={{ display: "flex" }} className="fc_common_div">
            <img src={contactLogo} alt="" srcset="" />
            <p className="mx-1">(+001)123-54678</p>
          </div>
          <div style={{ display: "flex" }} className="fc_common_div">
            <img src={emailLogo} alt="" srcset="" />
            <p className="mx-1">support@castleacademia.com</p>
          </div>
        </Col>

        <Col lg={4}>
          <h4>Get Updates</h4>
          <InputGroup className="mb-3" style={{ width: "70%" }}>
            <Form.Control
              style={{ borderRadius: "0 !important" }}
              placeholder="Enter your email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2" >
              <FiSend />
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
}
