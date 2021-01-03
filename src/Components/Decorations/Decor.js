import React from 'react'
import "./Decor.css"
import Share from '../images/sharing.png'
import Hand from '../images/hands.png'
import Hands from '../images/3hands.png'

const Decor = () => {
    return (
        <div className='decor' id="Decor">
            <h1>Give the Decorations For Your Home</h1>

            <div className="decor__container">
                <div className="card">
                    <img src={Share} alt="" className='card__image' />
                    <h1>Note Book</h1>
                    <p>Go Shopping</p>
                </div>
                <div className="card">
                    <img src={Hand} alt="" className='card__image' />
                    <h1>Zoom Book</h1>
                    <p>Go Shopping</p>
                </div>
                <div className="card">
                    <img src={Hands} alt="" className='card__image' />
                    <h1>Play Book</h1>
                    <p>Go Shopping</p>
                </div>
            </div>
        </div>
    )
}

export default Decor
