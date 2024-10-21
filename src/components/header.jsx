import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import '../styles/header.css';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';

const Header = ({ setSelectedCategory }) => {
  const [currentCategory, setCurrentCategory] = useState('Home');
  const [isVisible, setIsVisible] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
 
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(true);
        setIsFixed(true);
      } else {
        setIsVisible(false);
        setIsFixed(false);
      }
      setLastScrollY(currentScrollY);

        // current Category update on scroll position
        const sections = ['Home', 'Services', 'About', 'Contact'];
        sections.forEach((section) => {
          const sectionElement = document.getElementById(section);
          if (sectionElement) {
            const { offsetTop, clientHeight } = sectionElement;
            if (
              currentScrollY >= offsetTop - clientHeight / 3 &&
              currentScrollY < offsetTop + clientHeight
            ) {
              setCurrentCategory(section);
            }
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <header className="header-time">
        <div className="headin-info">
          <span><PhoneCallbackIcon /> (012) 345 6789</span>
          <span> Open Mon-Fri 08:00 - 17:00 (GMT+2)</span>
        </div>
      </header>

      <nav className={`navbar navbar-expand-lg navbar-light bg-light ${isFixed ? 'fixed-top' : ''}`}>
        <div className="container">
          <a className="navbar-brand" href="#Home">
            <h1>ITServices</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className={`nav-item ${currentCategory === 'Home' ? 'is-active' : ''}`} onClick={() => { setCurrentCategory('Home'); setSelectedCategory('Home'); }}>
                <a className="nav-link" href="#Home">Home</a>
              </li>
              <li className={`nav-item ${currentCategory === 'Services' ? 'is-active' : ''}`} onClick={() => { setCurrentCategory('Services'); setSelectedCategory('Services'); }}>
                <a className="nav-link" href="#Services">Services</a>
              </li>
              <li className={`nav-item ${currentCategory === 'About' ? 'is-active' : ''}`} onClick={() => { setCurrentCategory('About'); setSelectedCategory('About'); }}>
                <a className="nav-link" href="#About">About</a>
              </li>
              <li className={`nav-item ${currentCategory === 'Contact' ? 'is-active' : ''}`} onClick={() => { setCurrentCategory('Contact'); setSelectedCategory('Contact'); }}>
                <a className="nav-link" href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <button className="btn btn-primary">↑</button>
        </div>
      )}
    </>
  );
};

export default Header;
