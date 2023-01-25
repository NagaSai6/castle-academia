import React from "react";
import { Carousel, Card } from "react-bootstrap";
import facebookLogo from "./resources/images/facebook.png";
import linkedInLogo from "./resources/images/linkedin.png";
import instagramLogo from "./resources/images/instagram.png";
import whatsappLogo from "./resources/images/whatsapp.png";
import { Markup } from 'interweave';

export default function BannerCarousel(props) {
  if (props.teamData.length) {
    var carousel_items = props.teamData.map((item) => {
      return (
        <Carousel.Item>
          <Card style={{ position: "relative" }}>
            <Card.Img variant="top" className="bs_team_mate_img" src={require(`./resources/images/${item.imageSrc}`)} />
            <h4 className="bs_team_title">{item.name}</h4>
            <h4 className="bs_team_designation">{item.designation}</h4>
            <div className="bs_team_social_media">
            
              <a className="bs_social_media_button-first-child" href={item.whatsapp.url}>
              <img className="bs_social_media_icon" src={whatsappLogo} />
                
              </a>
              <a className="bs_social_media_button" href={item.instagram.url}>
                <img className="bs_social_media_icon" src={instagramLogo} />
              </a>
              <a className="bs_social_media_button" href={item.linkedin.url}>
                <img className="bs_social_media_icon" src={linkedInLogo} />
              </a>

              <a target="_blank"  className="bs_social_media_button" href={item.facebook.url}>
              <img className="bs_social_media_icon" src={facebookLogo} />
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

              <div className="bs_desc_section mt-2">
                <h6>{item.descHeader}</h6>
                <Markup  content={item.desc}/>
              </div>
            </Card.Body>
          </Card>
        </Carousel.Item>
      );
    });
  }
  return <Carousel className="bs_team_member_card">{carousel_items}</Carousel>;
}
