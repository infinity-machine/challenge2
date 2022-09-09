import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Header = () => {
    return (
        <div className="fixed center">
            <div className="nav"><NavLink to="/">CONNOR CARCIOFINI</NavLink></div>
            <div className="nav"><NavLink to="/portfolio">PORTFOLIO</NavLink></div>
            <div className="nav"><NavLink to="/resume">RESUME</NavLink></div>
            <div className="nav"><NavLink to="/media">MEDIA</NavLink></div>
            <div className="nav"><NavLink to="/contact">CONTACT</NavLink></div>
        </div>
    )
}

export default Header