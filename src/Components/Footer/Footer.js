import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Footer.css"


const Footer = () => {
    return (
        <div className="FooterContainer">
            <div className="FooterWrap">
                <div className="SocialMedia">
                    <div className="socialMediaWrap">
                        <h1 href="" className="navlogo">Specials Gift.</h1>
                        <span className='WebsiteRights'>Specials Gift. &copy; {new Date().getFullYear()} All rights reserved.</span>

                        <div className="socialicons">
                            <a href="" className="socialIconsLinks">
                                <FaFacebook />
                            </a>
                            <a href="https://www.instagram.com/hfdzhilmawan/" className="socialIconsLinks">
                                <FaInstagram />
                            </a>
                            <a href="" className="socialIconsLinks">
                                <FaYoutube />
                            </a>
                            <a href="" className="socialIconsLinks">
                                <FaTwitter />
                            </a>
                            <a href="https://github.com/" className="socialIconsLinks">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
