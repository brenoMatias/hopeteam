import React from 'react';
import '../pages/Home.css';
import CarouselContainer from '../components/CarouselContainer';
import Hero from '../components/Hero';
import Cards from '../components/Cards';

export default function Home() {
    return (

            <div className="home-container"> 
            <CarouselContainer />
            <Hero />

            </div>
            
    )
}
