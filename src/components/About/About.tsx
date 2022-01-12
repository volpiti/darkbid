import React from 'react'
import "./About.css";
import Logo from "./../../images/logo.jpg"

const About = () => {
    return (
        <div className="text">
            <p>Created by me and him for the purpose of passing pb138. Hopefully it will work.</p>
            <p>All purchases made via darkbid.com are at your own risk and are not recommended, because there is nothing that would keep your data safe.</p>
            <p>Btw. do not do drugs kids, it's bad.</p>
            <p>™2021</p>
            <img className="logo-image" src={Logo} alt="Logo of our darkweb auction site" />
        </div>
    )
}

export default About
