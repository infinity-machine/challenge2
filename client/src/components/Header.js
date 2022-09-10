import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Header = () => {
    const [navState, setNavState] = useState(false)

    const handleDropdown = (e) => {
        document.getElementById('dropdowncontent').classList.toggle('hide');
    }
    return (
            <div id="navbar" className="center centertext">
                <div id="container dropdown">
                    <p onClick={handleDropdown}>menu</p>
                    <div onClick={handleDropdown} id="dropdowncontent" className="hide">
                        <div className="nav"><NavLink to="/resume">RESUME</NavLink></div>
                        <div className="nav"><NavLink to="/portfolio">PORTFOLIO</NavLink></div>
                        <div className="nav"><NavLink to="/media">MEDIA</NavLink></div>
                        <div className="nav"><NavLink to="/contact">CONTACT</NavLink></div>
                    </div>
                </div>
            </div>
    )
}

export default Header