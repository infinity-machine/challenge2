import './header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() { 
    const handleDropDown = (e) => {
        const dd_content = document.querySelector('.drop-down-content')
        dd_content.classList.toggle('show')
      
    }
    const handleDropDownExit = (e) => {
       console.log('window')
    
    }
    
    return (
        <header>
            <div className="top-bar">
                <button id="drop-down-btn" onClick={handleDropDown}>DROP ME</button>
                <div className="drop-down-content">
                    <span><NavLink to="/">HOME!</NavLink></span>
                    <span><NavLink to="/portfolio">PORTFOLIO</NavLink></span>
                    <span><NavLink to="/resume">RESUME</NavLink></span>
                    <span><NavLink to="/contact">CONTACT</NavLink></span>
                </div>
            </div>
        </header>
    )
};

export default Header;