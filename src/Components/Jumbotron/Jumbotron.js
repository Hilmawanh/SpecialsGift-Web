import React, { useState, useEffect } from 'react'
import "./Jumbotron.css"
import Hands from '../images/3hands.png'
import Aos from 'aos'
import "aos/dist/aos.css";

const Jumbotron = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);

    return (
        <div className='jumbotron__container' id="Jumbotron">
            <div className="jumbotron__left">
                <h1>Send a gift for your specials person</h1>
                <p>In these end of the year holidays send a gift to your loved one and share the happiness.</p>
                <button type="submit">Get Started</button>
            </div>

            <div className="jumbotron__right">
                <img src={Hands} alt="" className="jumbotron__image" data-aos="fade-up" />
            </div>
        </div>
    )
}

export default Jumbotron
