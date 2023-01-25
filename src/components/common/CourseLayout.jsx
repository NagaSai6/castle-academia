import React from 'react';
import { Col, Card, } from "react-bootstrap";
import {BsDownload} from "react-icons/bs";


export default function CourseLayout(props) {
  function triggerDownload(){

  }
  return (
    <Col md="3" className='mb-4' onClick={triggerDownload}>
    <Card style={{ borderRadius: "15px" }} className="cs_card">
      <Card.Img className="cs_card_image" style={{ height: "100%"}} variant="top" src={require(`../CoursersOverView/${props.type}/resources/images/${props.data.image}`)} />
      <Card.Body className="cs_card_body">
        <Card.Text className="cs_card_text">{props.data['sub-category']}</Card.Text>
        {/* <a target="_blank" href={props.data['file-link']} className='mx-2 px-1' style={{border : 0,borderRadius : '8px',cursor:'pointer',textDecoration:'none',color:'#000',background:'#fdd03b'}} role="button" download>
          <BsDownload style={{width : "20px"}}/>
        </a> */}
      </Card.Body>

    </Card>
    <div className="cs_course_desc" style={{width : "300px"}}>
      <p>
        {props.data.content}
      </p>
    </div>
  </Col>
  )
}
