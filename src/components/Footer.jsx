import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import '../components/Footer.css';

function Footer() {
  return (
    <div className='footer-container'>


      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            {/* HOPE TEAM */}
            </Link>
          </div>
          <div class='social-icons'>

          <a  class='social-icon-link facebook i' href="https://www.facebook.com/hopeteamboxing/"
          target='_blank' aria-label='Facebook' rel="noreferrer">
            <i class='fab fa-facebook-f i-f' /></a>
            
            <a  class='social-icon-link instagram i' href="https://www.instagram.com/duduhopeteam/?hl=en"
          target='_blank' aria-label='Instagram' rel="noreferrer">
           <i class='fab fa-instagram' /></a>
              
           <a  class='social-icon-link whatsapp i' href=" https://wa.me/5531986788735"
          target='_blank' aria-label='Whatsapp' rel="noreferrer">
          <i class="fab fa-whatsapp"></i></a>
              
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;