import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const newIsMenuOpen = !isMenuOpen;
    setIsMenuOpen(newIsMenuOpen);
    document.body.style.overflow = newIsMenuOpen ? 'hidden' : 'auto';
  };

  return (
    <header className="header">
        <div className={`backdrop ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
        <a href="/" className="logo">Paatalu</a>

        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
            <a href="/" onClick={toggleMenu}>Home</a>
            <a href="/" onClick={toggleMenu}>About</a>
            <a href="/" onClick={toggleMenu}>Services</a>
            <a href="/" onClick={toggleMenu}>Support</a>
        </nav>
    </header>
  )
}

export default Header