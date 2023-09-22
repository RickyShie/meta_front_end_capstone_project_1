// Hamburger.js
import React, { useState, useEffect, useRef } from 'react';
import './Hamburger.css';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="hamburger-container">
      <button className="hamburger-button" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`menu ${isOpen ? 'open' : ''}`} ref={menuRef}>
        {/* Your Navbar items here */}
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#reservations">Reservations</a>
        <a href="#order-online">Order Online</a>
        <a href="#login">Login</a>
      </div>
    </div>
  );
}

export default Hamburger;
