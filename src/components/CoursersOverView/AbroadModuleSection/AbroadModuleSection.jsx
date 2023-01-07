import React from 'react'
import { Row, } from "react-bootstrap";
import CourseLayout from '../../common/CourseLayout';


export default function AbroadModuleSection(props) {
  let abroad_content = props.abroad_data.data.map((item)=>{
    return (
        <CourseLayout data={item} key={item._id} />
    )
     
  })
  return (
    <div className="cs_container mx-auto" style={{ marginTop: "10px" }}>
    <h2>{props.abroad_data.category_header}</h2>
    <div class="horizontal_dotted_line"></div>
    <p className="cs_desc">
    {props.category_desc}
    </p>

    <Row className="mt-4"> 
     {abroad_content}
    </Row>
  </div>
  )
}
