import React, { useState, useContext, Fragment } from "react";
import search from "./search-solid.svg";
import Zoom from "@mui/material/Zoom";
import Alert from "@mui/material/Alert";
import GithubContext from "../context/githubContext";

const Search = () => {
  const githubContext = useContext(GithubContext);
  const { onSearch } = githubContext;

  // useState
  const [showBtn, setBtn] = useState(false);
  const [showIcon, setIcon] = useState(true);
  const [input, setInput] = useState("");
  const [alert, setAlert] = useState(false);

  // Functions
  const handleClick = () => {
    setBtn(true);
    setIcon(false);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (input === "") {
      setAlert(true);
      setTimeout(() => setAlert(false), 3000);
    } else {
      onSearch(input);
      setInput("");
    }
  };

  return (
    <Fragment>
      <div className="container pt-5 search-section ">
        <form onSubmit={onSubmit} className="container clearfix hidden-sm">
          <div className="pb-3 pt-2 input-container">
            <i class="fas fa-search fa-2x icon-cog imgwrapper"></i>

            <input
              className="input-text"
              type="text"
              onClick={handleClick}
              onChange={handleChange}
              value={input}
              placeholder="Search Github username..."
            />

            <button className="search-btn btn btn-outline-dark" type="submit">
              <i class="fab fa-github fa-lg icon-search "></i> Search
            </button>
          </div>
        </form>
      </div>

      {/* Alert ========================= */}

      <Zoom in={alert}>
        <Alert variant="outlined" severity="error" style={alertStyle}>
          <span> Please enter a username </span>
        </Alert>
      </Zoom>
    </Fragment>
  );
};

const alertStyle = {
  color: "#ff5050",
  width: "250px",
  position: "absolute",
  left: "600px",
  bottom: "550px",
};

export default Search;
