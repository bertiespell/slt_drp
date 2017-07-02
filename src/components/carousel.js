import React, { Component } from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';
import slider1 from './images/ColourfulSD.png';
import slider2 from './images/blueplates.jpg';
import slider3 from './images/blackplates.jpg';

class CarouselComponent extends Component {
  render () {
    return (
      <Carousel className='sizecontrol'>
    <Carousel.Item className="carousel-item">
      <img responsive width={900} height={500} src={slider1}/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="carousel-item">
      <img responsive width={900} height={500} src={slider2}/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="carousel-item">
      <img responsive width={900} height={500} src={slider3}/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    )
  }
}

export default CarouselComponent;
