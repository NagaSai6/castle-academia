import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonialData } from "./testimonailData";
import Slider from "react-slick";

import "./resources/css/halloffame.css";
import invertedCommas from "./resources/images/invertedCommas.svg";

export default function HallOfFame() {
  let carousel_items_hof = testimonialData.map((item,index) => {
    // let className = index === 0 ? 'carousel-item active' : 'carousel-item';
 
    return (
      
      <div className="hof_parent_container" >
        <div className="hof_testimonial_container  mx-auto">
          <img className="mt-4" src={invertedCommas} alt="" srcset="" />
          <p className="mt-4">{item.testimonial}</p>
          <div className="hof_traingle"></div>
        </div>

        <div className="mt-4 ">
          <img className="hof_image_container mt-3" src={item.imageUrl} alt="" srcset="" />
           <p><b>{item.name}</b></p>
           <p>{item.designation}</p>
        </div>

        
      </div>
    );
  });
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows : true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
 
  return (
    <div className="hof_container">
      <h1>Hall of Fame</h1>
      <div style={{ width: "12%" }} class="horizontal_dotted_line"></div>
       <Slider {...settings}>
            {carousel_items_hof}
       </Slider>
    </div>
  );
}
