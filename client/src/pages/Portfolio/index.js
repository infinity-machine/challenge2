import React from 'react'
import dealwithit from '../../assets/images/dealwithit.png'
import me from '../../assets/images/me.png'
import weatherbot_img from '../../assets/images/weatherbot.png'
import dwi_img from '../../assets/images/dealwithit.png'

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
                <h3><a href="https://cjc-weatherapp.herokuapp.com/">WEATHERBOT</a></h3>
                <p>Weatherbot is a worldwide weather app with current, hourly, and daily forecasts, and the ability to save favorite locations.</p>
                <img id="wbicon" src={weatherbot_img}></img>
            </div>
            <div>
                <h3><a href="https://cjc-highrollers.herokuapp.com/">DEAL WITH IT</a></h3>
                <p>Deal With It is a full-stack interactive card game application with betting capabilities and authentication, developed by my team in the University of Minnesota's web development bootcamp.</p>
                <img id="dwiicon" src={dwi_img}></img>
            </div>
            {/* <div>
                <h3>AND I GUESS ONE MORE!!!</h3>
                <p>another project and i'll describe it</p>
                <p>*and the picture will go here*</p>
            </div> */}
        </div>
    )
}

export default Portfolio