import React, { useState, useContext, Fragment } from 'react';
import search from "./search-solid.svg";
import Zoom from '@mui/material/Zoom';
import Alert from '@mui/material/Alert';
import GithubContext from '../context/githubContext';

const Search = () => {


    const githubContext = useContext(GithubContext);
    const { onSearch } = githubContext;

    // useState
    const [showBtn, setBtn] = useState(false);
    const [showIcon, setIcon] = useState(true)
    const [input, setInput] = useState("");
    const [alert, setAlert] = useState(false);

    // Functions
    const handleClick = () => {
        setBtn(true);
        setIcon(false);
    }

    const handleChange = (e) => {
        const value = e.target.value;
        setInput(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (input === "") {
            setAlert(true)
            setTimeout(() => setAlert(false), 3000);
        } else {
            onSearch(input);
            setInput("");

        }

    }

    return <Fragment>

        <div className="container input-section pt-5 ">


            <form onSubmit={onSubmit} className="container clearfix hidden-sm">
                <div className="row">
                    <div className="box pb-3 pt-2 col-sm-6">
                        <i class="fas fa-search fa-2x icon-cog imgwrapper"></i>
                        <input className="input-text" type="text"
                            onClick={handleClick}
                            onChange={handleChange}
                            value={input}
                            type="text"
                            placeholder="Search Github username..." />
                    </div>


                    <button
                        className="col-sm-6 col-md-6 col-lg-6 search-btn btn btn-outline-dark"
                        type="submit"
                    >
                        <i class="fab fa-github fa-lg icon-cog "></i>  Search</button>
                </div>
            </form>

        </div>


        {/* Alert ========================= */}

        <Zoom in={alert}>
            <Alert variant="outlined" severity="error" style={alertStyle}>
                <span > Please enter a username </span>
            </Alert>
        </Zoom>



    </Fragment>
}



const alertStyle = {
    color: "#ff5050",
    width: "250px",
    position: "absolute",
    left: "600px",
    bottom: "550px"
}


export default Search;