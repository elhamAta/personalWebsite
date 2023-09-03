import React from "react";
import {Link, useLocation} from "react-router-dom";

const Header = () =>{
    const location = useLocation();
    return(
        <header>
            <div className="container">
                <span className="logo">
                    Elham Ataryani
                </span>
                <ul className="menu">
                    <li className={location.pathname === "/" && "active"}>
                        <Link to="/" >Home</Link>
                    </li>
                    <li className={location.pathname === "/about" && "active"}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className={location.pathname === "/projects" && "active"}>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className={location.pathname === "/projects" && "active"}>
                        <Link to="/contacts">Contacts</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
} 
export default Header