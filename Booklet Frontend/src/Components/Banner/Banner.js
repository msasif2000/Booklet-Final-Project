import React from 'react'
import { Carousel } from 'react-bootstrap'
import "./Banner.css"
import  banner1 from "../../imgs/banner1.jpg"
import  banner2 from "../../imgs/banner2.jpg"
import  banner3 from "../../imgs/banner3.jpg"
import  banner4 from "../../imgs/banner4.jpg"
import  banner5 from "../../imgs/book5.webp"
import  banner6 from "../../imgs/book6.webp"
const Banner = () => {
  return (
    <div>
      <Carousel className="car">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={banner1} 
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={banner2}
            alt="Second slide"
            
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={banner3}
            alt="Third slide"
            
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={banner4}
            alt="Fourth slide"
            
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={banner5}
            alt="Fifth slide"
           
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={banner6}
            alt="Sixth slide"   
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
