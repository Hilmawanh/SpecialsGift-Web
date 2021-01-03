import React, { useState } from 'react'
import "./Navbar.css"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link as LinkS } from 'react-scroll'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const [navbar, setNavbar] = useState(false)

    const openNav = () => {
        setClick(!click)
    }


    const changBackground = () => {
        if (window.scrollY >= 70) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }


    const closeMobile = () => {
        setClick(false)
    }


    window.addEventListener("scroll", changBackground)


    return (
        <div className={navbar ? 'navbar active' : 'navbar'}>
            <div className="navbar__container">
                <div className="logo">
                    <h1>Specials Gift</h1>
                </div>

                <ul className={click ? 'nav__menu active' : 'nav__menu'}>
                    <li className="nav__item">
                        <LinkS to="Jumbotron" smooth={true} offset={-60} className="nav__links" onClick={closeMobile}>
                            Home
                        </LinkS>
                    </li>
                    <li className="nav__item">
                        <LinkS to="Sharing" smooth={true} offset={-60} className="nav__links" onClick={closeMobile}>
                            Share
                        </LinkS>
                    </li>
                    <li className="nav__item">
                        <LinkS to="Decor" smooth={true} offset={-60} className="nav__links" onClick={closeMobile}>
                            Decorations
                        </LinkS>
                    </li>
                    <li className="nav__item">
                        <LinkS to="Hero" smooth={true} offset={-60} className="nav__links" onClick={closeMobile}>
                            Order!
                        </LinkS>
                    </li>
                    <li className="nav__item">
                        <button to="Hero" smooth={true} offset={-60} className="nav__buttonMobile" onClick={closeMobile}>
                            Login
                        </button>
                    </li>
                </ul>

                <div className="login__register">
                    <button className='button__login' type="submit">Login</button>
                </div>
            </div>

            <div className="nav__icons" onClick={openNav}>
                {click ? <FaTimes /> : <FaBars />}
            </div>
        </div>
    )
}

export default Navbar
