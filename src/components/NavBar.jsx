import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import '../components/NavBar.css';
import typoLogo from '../images/typoLogo.svg';
import img from '../components/img.jpg';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
       
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            
            <img src={typoLogo} alt="hope logo" ></img>
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' 
                className='nav-links'
                onClick={closeMobileMenu}>
                Início
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/sobre'
                className='nav-links'
                onClick={closeMobileMenu}>
                Hope
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/galeria'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Galeria
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/contato'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contato
              </Link>
            </li>
          </ul>

        </div>
  
      </nav>
    </>
  );
}

// qualquer lugar que clicar vai alterar o estado do click
// o click so vai importar pro nav menu burguer quando tiver 
// na tela menor
export default Navbar;