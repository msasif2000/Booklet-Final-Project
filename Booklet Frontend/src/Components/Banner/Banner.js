import React from 'react'
import { Carousel } from 'react-bootstrap'
import "./Banner.css"
import  book1 from "../../imgs/banner1.jpg"
import  book2 from "../../imgs/book2.webp"
import  book3 from "../../imgs/book3.webp"
import  book4 from "../../imgs/book4.webp"
import  book5 from "../../imgs/book5.webp"
import  book6 from "../../imgs/book6.webp"
const Banner = () => {
  return (
    <div>
      <Carousel className="car">
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={book1} 
            alt="First slide"
            
          />
          <Carousel.Caption>
            <h4>Coding All in One</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={book2}
            alt="Second slide"
            
          />
          <Carousel.Caption>
            <h4>Python Programming</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={book3}
            alt="Third slide"
            
          />
          <Carousel.Caption>
            <h4>Modern C++ Programming</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={book4}
            alt="Fourth slide"
            
          />
          <Carousel.Caption>
            <h4>HTML & CSS</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={book5}
            alt="Fifth slide"
           
          />
          <Carousel.Caption>
            <h4>Software Design Principles</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={book6}
            alt="Sixth slide"   
          />
          <Carousel.Caption>
            <h4>Master C#</h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
