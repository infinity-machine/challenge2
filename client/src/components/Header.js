import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Header = () => {
    return (
        <div className="container fivecolumns">
            <div className="center" id="green"><NavLink to="/">CONNOR CARCIOFINI</NavLink></div>
            <div className="center" id="blue"><NavLink to="/portfolio">PORTFOLIO</NavLink></div>
            <div className="center" id="yellow"><NavLink to="/resume">RESUME</NavLink></div>
            <div className="center" id="orange"><NavLink to="/media">MEDIA</NavLink></div>
            <div className="center" id="pink"><NavLink to="/contact">CONTACT</NavLink></div>
        </div>
    )
}

export default Header