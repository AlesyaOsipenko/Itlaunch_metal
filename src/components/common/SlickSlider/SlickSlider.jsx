import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import s from "../SlickSlider/SlickSlider.css";
import slider1 from './../../../images/OneServicePage/slider1.png';



export default class SimpleSlider extends Component {
  render() {
    const settings = {
        className: "center",
      dots: true,
      arrows:true,
      centerMode: true,
      centerPadding: "220px",
      infinite: true,
      variableWidth: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      
    };
    return (
      <div style={{overflow:"hidden", width:"100%"}}>
        <Slider {...settings}>
          <div>
            <img src={slider1} alt="" />
          </div>
         <div>
            <img src={slider1} alt="" />
         </div>
          <div>
            <img src={slider1} alt="" />
          </div>
          
        </Slider>
      </div>
    );
  }
}