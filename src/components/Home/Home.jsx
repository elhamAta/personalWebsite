import React from "react";
import HomeAbout from "../HomeAbout/HomeAbout";
import HomeProjects from "../HomeProjects/HomeProjects";
const Home  = () => {
    return(
        <div className="main">
          <HomeAbout />
          <HomeProjects />
        </div>
    )
} 
export default Home