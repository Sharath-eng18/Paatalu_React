import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    const newIsMenuOpen = !isMenuOpen;
    setIsMenuOpen(newIsMenuOpen);
    document.body.style.overflow = newIsMenuOpen ? 'hidden' : 'auto';
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className={`backdrop ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
        
        <div className="header-content">
          <a href="/" className="logo">
            <span className="logo-icon">🎵</span>
            <span className="logo-text">Paatalu</span>
          </a>

          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
              <a href="/" onClick={toggleMenu}>
                <span className="nav-text">Home</span>
              </a>
              <a href="/" onClick={toggleMenu}>
                <span className="nav-text">Discover</span>
              </a>
              <a href="/" onClick={toggleMenu}>
                <span className="nav-text">Library</span>
              </a>
              <a href="/" onClick={toggleMenu}>
                <span className="nav-text">Profile</span>
              </a>
          </nav>
        </div>
    </header>
  )
}

export default Header