import React from 'react';
import   "./resources/css/achieverssection.css";
import dribbble_logo from "./resources/images/dribbble.svg";
import google_logo from './resources/images/google.svg';
import bb_logo from './resources/images/bb.svg';
import paytm_logo from './resources/images/paytm.png';
import byju_logo from './resources/images/byju.png';
import amazon_logo from './resources/images/amazon.svg';
import ms_logo from './resources/images/ms.svg';
import linkedin_logo from "./resources/images/linkedin.svg";
import { Row,Col } from 'react-bootstrap';




export default function AchieversSection() {
  return (
    <div  className="cs_container mx-auto">
        <h2>Our Achievers Works At</h2>
        <div class="horizontal_dotted_line"></div>
        {/* <p className="cs_desc">
        We just got featured in the following magazines and it has been the most incredible journey. We work with the best fashion magazines across the world 
      </p> */}
      <Row className="as_logo_parent_container">
        {/* <Col className='as_logo_container mx-2 my-2'> 
            <img src={ dribbble_logo} alt="" srcset="" />
        </Col> */}
        <Col className='as_logo_container mx-2 my-2'> 
            <img className='as_logo' src={ google_logo} alt="" srcset="" />
        </Col>
        <Col className='as_logo_container mx-2 my-2'> 
            <img className='as_logo' src={ amazon_logo} alt="" srcset="" />
        </Col> 
        <Col className='as_logo_container mx-2 my-2'   > 
            <img src={paytm_logo} alt="" srcset="" style={{width : "140px"}} />
        </Col>
        <Col className='as_logo_container mx-2 my-2'> 
            <img className='as_logo' src={byju_logo} alt="" srcset="" style={{width : "140px"}} />
        </Col>
        <Col className='as_logo_container mx-2 my-2'> 
            <img className='as_logo' src={ linkedin_logo} alt="" srcset="" />
        </Col>
      </Row>
    </div>
  )
}
