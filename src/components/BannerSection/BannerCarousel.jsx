import React from "react";
import { Carousel, Card } from "react-bootstrap";
import facebookLogo from "./resources/images/facebook.png";
import linkedInLogo from "./resources/images/linkedin.png";
import twitterLogo from "./resources/images/twitter.png";
import instagramLogo from "./resources/images/instagram.png";
import achievementLogo from "./resources/images/badge.png";
import educationLogo from "./resources/images/mortarboard.png";
import experienceLogo from "./resources/images/portfolio.png";

export default function BannerCarousel(props) {
  if (props.teamData.length) {
    var carousel_items = props.teamData.map((item) => {
      return (
        <Carousel.Item>
          <Card style={{ position: "relative" }}>
            <Card.Img variant="top" src={item.imageSrc} />
            <h4 className="bs_team_title">{item.name}</h4>
            <h4 className="bs_team_designation">{item.designation}</h4>
            <div className="bs_team_social_media">
              <a className="bs_social_media_button-first-child" href="https://www.facebook.com/profile.php?id=100089498376775">
                <img className="bs_social_media_icon" src={facebookLogo} />
              </a>
              <a className="bs_social_media_button" href="https://www.linkedin.com/in/castle-academia-093877261">
                <img className="bs_social_media_icon" src={linkedInLogo} />
              </a>
              <a className="bs_social_media_button" href="https://instagram.com/castle_academia?igshid=Yzg5MTU1MDY=">
                <img className="bs_social_media_icon" src={instagramLogo} />
              </a>
            </div>
            <Card.Body>
              <div className="bs_about_section">
                {/* <div className="bs_about_section-sub">
                  <img
                    className="bs_about_section-logo"
                    src={achievementLogo}
                    alt=""
                    srcset=""
                  />
                  <div className="bs_about_section_mobile">
                    <p className="bs_about_section_achieve">Achievements :</p>
                    <p className="bs_about_section_edu"> {item.achievements}</p>
                  </div>
                </div> */}

                {/* <div className="bs_about_section-sub">
                  <img
                    className="bs_about_section-logo"
                    src={experienceLogo}
                    alt=""
                    srcset=""
                  />
                  <div className="bs_about_section_mobile">
                    <p className="bs_about_section_achieve">Experience :</p>
                    <p className="bs_about_section_edu">{item.experience}</p>
                  </div>
                </div> */}
              </div>

              <div className="bs_desc_section mt-3">
                <h6>{item.descHeader}</h6>
                <p className="bs_about_carousel_desc">{item.desc}</p>
              </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
      );
    });
  }
  return <Carousel className="bs_team_member_card">{carousel_items}</Carousel>;
}
