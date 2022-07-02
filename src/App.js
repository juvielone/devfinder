import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Heading from "./layout/Heading";
import Home from "./pages/Home";
import About from "./pages/About";
import OneUser from "./users/OneUser";

import GithubState from "./context/GithubState";

import "./App.css";

function App() {

  return (
    <GithubState>

      <Router>

        <div className="container-fluid" >

          <Heading />

          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/about" element={<About />} />

            <Route exact path="/user/:nameLogin" element={<OneUser />} />


          </Routes>




        </div>

      </Router>

    </GithubState>
  );
}

export default App;
