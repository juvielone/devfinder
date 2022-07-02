import React, { Fragment } from 'react';
import Search from '../search/Search';
import Users from '../users/Users';
import Footer from "../layout/Footer";



const Home = () => {
    return (
        <Fragment>
            <div className="container-fluid">
                <Search />
                <Users />
                <Footer />
            </div>
        </Fragment>
    )
}


export default Home;