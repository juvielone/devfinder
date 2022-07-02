import React from 'react';
import { Link } from "react-router-dom";
import logo from "./logo.svg";


const Heading = () => {
    return (
        <div className="heading container ">

            <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
                <div class="container">
                    <span class="brandName">devfinder</span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon nav-toggle"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                            <li class="nav-item">
                                <Link to="/" className="nav-link h5 me-5">
                                    home
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/about" className="nav-link h5">about</Link>

                            </li>

                        </ul>

                    </div>
                </div>
            </nav>




        </div>
    )
}

export default Heading;



