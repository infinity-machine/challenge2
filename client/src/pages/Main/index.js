import React from 'react'
import me_pic from '../../assets/images/me.png'
import '../../index.css'

const Main = () => {
    return (
        <div className="container">
            <div className="container twocolumns">
                <img id="icon" src={me_pic} alt="literally me"></img>
                <article class="righttext">
                    <h3>CONNOR CARCIOFINI</h3>
                    <h4>web developer</h4>
                </article>
            </div>
        </div>
    )
}

export default Main