import React from 'react'
import dealwithit from '../../assets/images/dealwithit.png'
import me from '../../assets/images/me.png'

const Portfolio = () => {
    return (
        <div className="container centertext top">
            {/* <div className="container twocolumns">
                <div>
                <img id="me" src={me} alt="literally me" width="200px"></img>
                </div>
                <div className='righttext top'>
                    <h3>connor carciofini</h3>
                    <p className="topbit">WEB DEVELOPER</p>
                </div>
            </div> */}
            <div>
                <h3>WEATHERBOT!</h3>
                <p>Weatherbot is a worldwide weather app with current, hourly, and daily forecasts, and the ability to save favorite locations</p>
                <p>*image of weatherbot goes here...*</p>
            </div>
            <div>
                <h3>DEAL WITH IT</h3>
                <p>Deal With It is a full-stack interactive card game application with betting capabilities and authentication, developed by my team in the University of Minnesota's web development bootcamp. The app is currently live on <a href="https://cjc-highrollers.herokuapp.com/">Heroku.</a></p>
            </div>
            <div>
                <h3>AND I GUESS ONE MORE!!!</h3>
                <p>another project and i'll describe it</p>
                <p>*and the picture will go here*</p>
            </div>
        </div>
    )
}

export default Portfolio