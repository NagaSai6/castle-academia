import React from 'react'
import { Row, Col, Card, Button } from "react-bootstrap";
import CourseLayout from '../../common/CourseLayout';
export default function StartUpModuleSection(props) {
  let startup_content = props.startup_data.data.map((item)=>{
    return (
       <CourseLayout data={item} key={item._id} />
    )
  })
  return (
    <div className="cs_container mx-auto" style={{ marginTop: "10px" }}>
    <h2>{props.startup_data.category_header}</h2>
    <div class="horizontal_dotted_line"></div>
    <p className="cs_desc">
      {props.startup_data.category_desc}
    </p>

    <Row className="mt-4">
      {startup_content}

    </Row>
  </div>
  )
}
