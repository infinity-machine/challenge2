import React from 'react'
import '../index.css';
import card from '../assets/images/card.png'

const Card = () => {
    return (
        <div className="container top sides center">
            <img id="card" src={card} alt="literally me"></img>
        </div>
    )
}

export default Card