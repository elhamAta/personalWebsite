import React from "react";
import {Link} from 'react-router-dom';
import linkdin from '../../assets/images/linkedin.png';
import insta from '../../assets/images/instagram.png';
import email from '../../assets/images/envelope.png';

const Footer  = () =>{
    return(
        <footer> 
            <ul className="socials">
                <li>
                    <Link>
                        <img src={linkdin} alt="" />
                    </Link>
                </li>
                <li>
                    <Link>
                        <img src={email} alt="" />
                    </Link>
                </li>
                <li>
                    <Link>
                        <img src={insta} alt="" />
                    </Link>
                </li>
            </ul>
            <span className="sign">
                Elham Ataryani 2023
            </span>
        </footer>
    )
} 
export default Footer