import React, { useEffect } from 'react'
import "./Sharing.css"
import Share from '../images/sharing.png'
import Aos from 'aos'
import "aos/dist/aos.css";

const Sharing = () => {

    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <div className='sharing__container' id="Sharing">
            <div className='sharing__left'>
                <img src={Share} className="image__sharing" alt="" data-aos="fade-right" />
            </div>

            <div className="sharing__right">
                <h1>Sharing is The Best Gift You Can Give</h1>
                <p>
                    Sharing these holidays is the best gift you can give,
                    give a present or share your love with the people you love
                </p>
                <button className="button__sharing">
                    Send A Gift
                </button>
            </div>
        </div>
    )
}

export default Sharing
