import React, { useEffect } from 'react'
import "./Hero.css"
import Hand from '../images/hands.png'
import Aos from 'aos'
import "aos/dist/aos.css";

const Hero = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div className='hero__container' id="Hero">
            <div className="hero__left">
                <h1>Send Gift Now</h1>

                <p>Start giving away before the holidays are over. Wrire the home adress od the person who will send the gift</p>

                <form className='form' action="">
                    <input type="text" placeholder="House Order" />
                    <button type="submit">Send</button>
                </form>
            </div>

            <div className="hero__right">
                <img src={Hand} alt="" className="hero__image" data-aos="fade-right" />
            </div>
        </div>
    )
}

export default Hero
