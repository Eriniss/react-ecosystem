import { useEffect, useState } from 'react';

import NetflixLogo from '../static/netflix-logo.png';
import './Nav.css';

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <img alt="Netflix Logo" src={NetflixLogo} className="nav__logo" onClick={() => window.location.reload()} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={show ? 'white' : 'black'}
        className="bi bi-person-circle nav__avatar"
        viewBox="0 0 16 16"
      >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path
          fillRule="evenodd"
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
        />
      </svg>
    </nav>
  );
};

export default Nav;
