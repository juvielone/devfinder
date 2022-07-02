import React, { Fragment } from 'react'
import profile from "../users/icons/dp.svg"
import proj from "../users/icons/project.svg"
import Zoom from '@mui/material/Zoom';


const About = () => {
    return <Fragment>
        <Zoom in={true}>
            <div className="about-section">

                <div className="row first-row">

                    <img src={profile} alt="profile" className="about-profile col-lg-12 col-sm-12 " />

                    <div className="container about-heading col-lg-12 col-sm-12">
                        <h1>Hi, I'm <span className="highlight">Juvie. </span>
                            I build & design apps and sites just like this one.</h1>
                    </div>

                </div>


                <div className="container about-app">

                    <div className="row proj-about-row">
                        <div className="col-sm-12">
                            <img src={proj} alt="project drawing" className="proj-about " />
                        </div>

                        <div className="col-sm-12 proj-content text-center">
                            <h1> <span className="highlight">devfinder </span>
                                is a web application that lets you search a piece of github developer information such as location, company, and their newly created repositories </h1>

                        </div>
                    </div>

                </div>


                <div className="container row socials">
                    <div className="col-lg-4 col-sm-1">
                        <a href="https://github.com/juvielone">
                            <i className="fab fa-github fa-3x sicon"></i>
                        </a>
                    </div>


                    <div className="col-lg-4 col-sm-1">
                        <a href="www.linkedin.com/in/joshualagos">
                            <i class="fab fa-linkedin fa-3x sicon"></i>
                        </a>
                    </div>


                    <div className="col-lg-4 col-sm-1">
                        <a href="mailto: juvielonelagos27@gmail.com">
                            <i class="far fa-envelope fa-3x sicon"></i>
                        </a>
                    </div>


                </div>

            </div>
        </Zoom>
    </Fragment>
}

export default About;
