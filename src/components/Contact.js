import React from 'react';
import Iframe from 'react-iframe';
import '../App.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import '../components/Hero.css';
import 'animate.css';

function Contact() {
    return ( 
    <><div className="contact">

        <h1> Entre em contato pelas redes sociais </h1>
        <div class=''>

          <div class='test1  social-icons'>
            <Link
              class='social-icon-link facebook i'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f i-f' />
            </Link>
            <Link
              class='social-icon-link instagram i'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube i1'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter i'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter i'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>

        <div className="classes">

          <h1 className="aulas"> AULAS: </h1>
          <div className="clas1">
            <h1 className="h1-c"> Segunda</h1>
            <p className="p1">7-8h, 8-9h, 19-20h</p>
          </div>
          <div className="clas1">
            <h1 className="h1-c"> Quarta</h1>
            <p className="p1">7-8h, 8-9h, 19-20h</p>
          </div>
          <div className="clas1">
            <h1 className="h1-c"> Sexta</h1>
            <p className="p1">7-8h, 8-9h, 19-20h</p>
          </div>

        </div>
        <div className="map">
          <h1> Como Chegar</h1>
          <div className="map1">
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.9388320417347!2d-42.5667695850929!3d-19.45820388686975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xafffcf42de5c73%3A0x33077df59d70e627!2sR.%20Von%20Goethe%2C%20348%20-%20Cidade%20Nobre%2C%20Ipatinga%20-%20MG%2C%2035162-417!5e0!3m2!1sen!2sbr!4v1640354446680!5m2!1sen!2sbr"
              id="myId"
              width="1024" height="500"
              className="myClassname"
              display="initial"
              position="relative" />
          </div>
        </div>


      </div><Footer /></>

    )
}

export default Contact
