import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import CourseLayout from "../../common/CourseLayout";

export default function CRTModuleSection(props) {


  let crt_components = props.crt_data.data.map((item)=>{
    return (
         <CourseLayout data={item} key={item._id}/>
    )
  })
  return (
    <div className="cs_container mx-auto" style={{ marginTop: "85px" }}>
      <h2>{props.crt_data.category_header}</h2>
      <div class="horizontal_dotted_line"></div>
      <p className="cs_desc">
        {props.crt_data.category_desc} 
      </p>

      <Row className="mt-4">
        {crt_components}
      </Row>
    </div>
  );
}
