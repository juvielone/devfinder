import React, { useContext } from 'react';

import GithubContext from '../context/githubContext';


const Footer = () => {
    const githubContext = useContext(GithubContext);
    const { users } = githubContext;


    const year = new Date().getFullYear();

    return (
        <div className="footer-section"
            style={{ marginTop: users.length > 0 ? "100px" : "400px" }}>

            <h1>© {year} / DEVFINDER / JUVIELONE</h1>

        </div>
    )
}



export default Footer;
