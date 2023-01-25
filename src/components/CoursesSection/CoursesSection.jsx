import React,{useState} from "react";
import "./resources/css/coursessection.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import startup_plan_logo from "./resources/images/businessmanpana1.svg";
import abroad_studies_logo from "./resources/images/studyabroadpana1.svg";
import crt_logo from './resources/images/crt.svg';
import ReactCardFlip from 'react-card-flip';
import crtBackLogo from "./resources/images/crtBack.svg"

export default function CoursesSection() {

  const [isFlipped,setIsFlipped] = useState(false);
  const [isFlippedStartUp,setisFlippedStartUp] = useState(false)
  const [isFlippedAbroad,setisFlippedAbroad] = useState(false);
  return (
    <div className="cs_container mx-auto" id="courses_section">
      <h2>360° View on Courses We Offer</h2>
      <div class="horizontal_dotted_line"></div>
      <p className="cs_desc mb-4">
      The most crucial component of career transition is determining which professional route is meant for you and receiving expert's advice on that track
      </p>

      <Row>
        <Col md={4}>
          <ReactCardFlip infinite={false}  isFlipped={isFlipped} flipDirection="horizontal" containerStyle={{transition : 'smooth'}}>
          <Card onMouseEnter={()=> setIsFlipped(true)}   style={{borderRadius : "25px",width : "",border:'0'}}  className="cs_card mx-auto">
            <Card.Img className="cs_card_image" variant="top" src={crt_logo} height="2000"/>
            <Card.Body className="cs_card_body">
              <Card.Text className="cs_card_text">CRT TRAINING</Card.Text>
            </Card.Body>
          </Card>

          <Card onMouseLeave={()=> setIsFlipped(!isFlipped)} style={{borderRadius : "25px",width : "",border:'0'}}  className="cs_back_card mx-auto">
            <Card.Body className="cs_back_card_body">
              <div className="d-flex cs_back_card_body_header" >
                <img src={crtBackLogo} alt="" srcset="" />
                <h3 className="cs_back_card_body_header_text">CRT TRAINING</h3>
              </div>
              <ul className="cs_back_card_body_ul mt-4">
                <li className="cs_back_card_body_points">CAREER COUNSELLING</li>
                <li className="cs_back_card_body_points">TRAINING</li>
                <li className="cs_back_card_body_points">MOCK INTERVIEW</li>
                <li className="cs_back_card_body_points">RESUME REVIEW</li>
              </ul>
               <div className="d-flex justify-content-center cs_back_card_body_button_container">
               <a role={'button'} href={'https://www.africau.edu/images/default/sample.pdf'} download className="cs_back_card_body_button">Read More</a>
               </div>
            </Card.Body>
          </Card>
          </ReactCardFlip>
          <div className="cs_course_desc mx-auto" style={{width : "300px"}}>
            <p>Learn core industry skills from top edtech instructors.We assist in hunting new job opportunities and our expertise helps you land on dream job through mentoring in networking, interviewing, and placement techniques.</p>
          </div>
          
        </Col>


        <Col md={4}>
        <ReactCardFlip flipSpeedFrontToBack={0.6} isFlipped={isFlippedStartUp}  containerStyle={{transition : 'smooth'}}>
          <Card onMouseEnter={()=> setisFlippedStartUp(true)}   style={{borderRadius : "25px",width : "",border:'0'}}  className="cs_card mx-auto">
            <Card.Img className="cs_card_image" variant="top" src={startup_plan_logo} />
            <Card.Body className="cs_card_body">
              <Card.Text className="cs_card_text">STARTUP PLAN</Card.Text>
            </Card.Body>
          </Card>

          <Card onMouseLeave={()=> setisFlippedStartUp(!isFlippedStartUp)} style={{borderRadius : "25px",width : "",border:'0'}}  className="cs_back_card mx-auto">
            <Card.Body className="cs_back_card_body">
              <div className="d-flex cs_back_card_body_header" >
                <img src={crtBackLogo} alt="" srcset="" />
                <h3 className="cs_back_card_body_header_text">STARTUP PLAN</h3>
              </div>
              <ul className="cs_back_card_body_ul mt-4">
                <li className="cs_back_card_body_points">LEADERSHIP & MANAGEMENT COURSE</li>
                <li className="cs_back_card_body_points">HOW TO ENROLL COMPANY</li>
                <li className="cs_back_card_body_points">1:1 SESSION WITH CEO</li>
                <li className="cs_back_card_body_points">MOCK ON PITCHING</li>
              </ul>
               <div className="d-flex justify-content-center cs_back_card_body_button_container">
               <a role={'button'} href={'https://www.africau.edu/images/default/sample.pdf'} download className="cs_back_card_body_button">Read More</a>
               </div>
            </Card.Body>
          </Card>
          </ReactCardFlip>
          <div className="cs_course_desc mx-auto" style={{width : "300px"}}>
            <p> We personally  assist & modify plan according to your ideation followed by building startup from scratch to seed funding which includes leadership management ,pitch and product readiness, 1:1 session with CEO's.</p>
          </div>
        </Col>

        <Col md={4}>
        <ReactCardFlip flipSpeedFrontToBack={0.6} isFlipped={isFlippedAbroad}  containerStyle={{transition : 'smooth'}}>
          <Card onMouseEnter={()=> setisFlippedAbroad(true)}   style={{borderRadius : "25px",width : "",border:'0'}}  className="cs_card mx-auto">
            <Card.Img className="cs_card_image" variant="top" src={abroad_studies_logo} />
            <Card.Body className="cs_card_body">
              <Card.Text className="cs_card_text">ABROAD STUDIES</Card.Text>
            </Card.Body>
          </Card>

          <Card onMouseLeave={()=> setisFlippedAbroad(!isFlippedAbroad)} style={{borderRadius : "25px",width : "",border:'0'}}  className="cs_back_card mx-auto">
            <Card.Body className="cs_back_card_body">
              <div className="d-flex cs_back_card_body_header" >
                <img src={crtBackLogo} alt="" srcset="" />
                <h4 className="cs_back_card_body_header_text">ABROAD STUDIES</h4>
              </div>
              <ul className="cs_back_card_body_ul mt-4">
                <li className="cs_back_card_body_points">COLLEGE COUNSELLING</li>
                <li className="cs_back_card_body_points">EXAM COUNSEL( FREE)</li>
                <li className="cs_back_card_body_points">UNIVERSITY SHORTLISTING</li>
                <li className="cs_back_card_body_points">VISA APPROVAL</li>
              </ul>
               <div className="d-flex justify-content-center cs_back_card_body_button_container">
               <a role={'button'} href={'https://www.africau.edu/images/default/sample.pdf'} download className="cs_back_card_body_button">Read More</a>
               </div>
            </Card.Body>
          </Card>
          </ReactCardFlip>
          <div className="cs_course_desc mx-auto" style={{width : "300px"}}>
            <p> Discover and interact with Alumni of your dream college who once travelled the same route as you.
We provide A-Z overseas services, from assisting you in selecting the best university to enrolling in it
</p>
          </div>
        </Col>


      </Row>
    </div>
  );
}
