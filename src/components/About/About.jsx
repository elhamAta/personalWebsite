import React from "react";
import user from '../../assets/images/user.png';
import { Link } from "react-router-dom";

const About  = () =>{
    return(
        <div className="container">
            <div className="about-page">
                <div className="info-about">
                    <h1 className="title">About me</h1>
                    <p>
                    Short text with details about you, what you do or your professional career. You can add more information on the about page.
                    </p>
                    <Link to="/" className="btn">Resume</Link>
                </div>
                <img src={user} alt="" />
            </div>
        </div>
    )
} 
export default About