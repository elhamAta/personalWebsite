import React from "react";
import {Link} from 'react-router-dom';
import pic1 from '../../assets/images/pic.png';
import pic2 from '../../assets/images/pic2.png';
import pic3 from '../../assets/images/pic3.png';

const HomeProjects  = () =>{
    return(
        <section className="project-sec">
        <h2 className="title">Projects</h2>
        <ul className="list-project">
            <li>
                <div className="info-prj">
                    <h3 className="project-name">
                        Project Name
                    </h3>
                    <p className="desc">
                    What was your role, your deliverables, if the project was personal, freelancing.
                    </p>
                    <Link to="/" className="btn">
                        View Project
                    </Link>
                </div>
                <img src={pic1} alt="" className="img-project"/>
            </li>
            <li>
                <div className="info-prj">
                    <h3 className="project-name">
                        Project Name
                    </h3>
                    <p className="desc">
                    What was your role, your deliverables, if the project was personal, freelancing.
                    </p>
                    <Link to="/" className="btn">
                        View Project
                    </Link>
                </div>
                <img src={pic2} alt="" className="img-project"/>
            </li>
            <li>
                <div className="info-prj">
                    <h3 className="project-name">
                        Project Name
                    </h3>
                    <p className="desc">
                    What was your role, your deliverables, if the project was personal, freelancing.
                    </p>
                    <Link to="/" className="btn">
                        View Project
                    </Link>
                </div>
                <img src={pic3} alt="" className="img-project"/>
            </li>
        </ul>
    </section>
    )
} 
export default HomeProjects