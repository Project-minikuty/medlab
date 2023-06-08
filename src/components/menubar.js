import React from 'react';
import './MobileMenu'
import './menubar.css'

export default function Menubar() {
  return (
    <div className="container" ref={menuRef}>
      <div className="menu-trigger" ref={openTriggerTopRef}>
        <span className="menu-trigger-bar top"></span>
        <span className="menu-trigger-bar middle"></span>
        <span className="menu-trigger-bar bottom"></span>
      </div>
      <div className="close-trigger" ref={closeTriggerLeftRef}>
        <span className="close-trigger-bar left"></span>
        <span className="close-trigger-bar right"></span>
      </div>
      <div className="logo">
        <span ref={logoRef}>Menu</span>
        <div className="logo-badge">3</div>
      </div>
      <div className="inner-container">
        <div className="menu-container">
          <ul className="menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="menu-bg"></div>
    </div>
  );
  }
