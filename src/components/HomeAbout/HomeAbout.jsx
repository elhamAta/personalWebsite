import React from "react";
import imgAbout from '../../assets/images/about.png';
import {Link} from 'react-router-dom';

const HomeAbout  = () =>{
    return(
        <section className="about-sec">
                <div className="info">
                    <span className="job-title">
                        Front End Developer
                    </span>
                    <span className="name">
                        Hello, My name is Elham Ataryani
                    </span>
                    <p>
                    Short text with details about you, what you do or your professional career. You can add more information on the about page.
                    </p>
                    <div className="links">
                        <Link to="/" className="btn btn2">LinkedIn</Link>
                        <Link to="/projects"  className="btn">Projects</Link>
                    </div>
                </div>
                <img src={imgAbout} alt="" className="about-img"/>

                
            </section>
    )
} 
export default HomeAbout