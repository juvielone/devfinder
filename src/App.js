import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import OneUser from "./users/OneUser";

import GithubState from "./context/GithubState";

import "./App.scss";

function App() {

  return (
    <GithubState>

      <Router>

        <div className="container-fluid" >


          <Routes>
            <Route exact path="/" element={<Home />} />


            <Route exact path="/user/:nameLogin" element={<OneUser />} />


          </Routes>




        </div>

      </Router>

    </GithubState>
  );
}

export default App;
