
import React from 'react';
import { Carousel } from 'react-bootstrap';
import AppCss from '../App.css';
import image1 from './../images/1.jpg';
import image2 from './../images/2.jpg';
import image3 from './../images/3.jpg';
import carousel1 from './../images/carousel1.jpg';
import carousel2 from './../images/carousel2.jpg';
import carousel3 from './../images/carousel3.jpg';
import Background from './../images/Background.png';
import test3 from './../images/test3.jpg';
import finalHeader from './../images/finalHeader.jpg';
import tes111 from './../images/tes111.jpg'
// import logo2 from './../images/logo2.jpg';

const CarouselContainer = () => {
  return (
    <div className="carousel"> 
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={finalHeader}
          alt="First slide"
        />
        <div className="c.capation"> 
        <Carousel.Caption >
          <div className='ccaption'> 
          <h3>Academia de Boxe</h3>
          <p>Ipatinga - MG</p>
          </div>
        </Carousel.Caption>
        </div>
      
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={tes111}
          alt="Third slide"

        />
        <Carousel.Caption>
        <div className='animate__animated animate__rotateIn ccaptionmude'> 
          <h3>MUDE SEU ESTILO DE VIDA!</h3>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={carousel1}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarouselContainer;