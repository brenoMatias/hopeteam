import React from 'react';
import '../App.css';
import Footer from '../components/Footer';
import crop2 from '../images/crop2.svg';

function About() {
    return (
        <div> 
            <div className="about"> 
                <div className="about-main">
                    <div className='about-text'> 
                    <h1 className='about-header'>Tudo começou quando...</h1>
                    <p>...em 19xx nasceu Dudu</p>
                    </div>
                </div>
            </div>
          <Footer />
        </div>
    )
}

export default About
