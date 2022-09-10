import React from 'react'
import dealwithit from '../../assets/images/dealwithit.png'
// import { NavLink } from 'react-router-dom';


const Portfolio = () => {
    return (
        <div className="container twocolumns top">
            <div>
                <h3>WEATHERBOT!</h3>
                <p>Weatherbot is a worldwide weather fetching app, where you can register and save locations. In addition to current weather conditions, daily and hourly forecasts are also available.</p>
            </div>
            <div>
                <p>image of weatherbot goes here...</p>
            </div>
            <div>
                <img id="dealwithit" src={dealwithit} alt="literally me"></img>
            </div>
            <div className="righttext">
                <h3>DEAL WITH IT</h3>
                <p>Deal With It is a full-stack interactive card game application with betting capabilities and authentication, developed by my team in the University of Minnesota's web development bootcamp. The app is currently live on <a href="https://cjc-highrollers.herokuapp.com/">Heroku.</a></p>
            </div>
            <div>
                <h3>AND I GUESS ONE MORE!!!</h3>
                <p>another project and i'll describe it</p>
            </div>
            <div>
                <p>and the picture will go here</p>
            </div>
        </div>
    )
}

export default Portfolio