import React, { Fragment, useContext, useEffect } from "react";
import Search from "../search/Search";
import Users from "../users/Users";
import Footer from "../layout/Footer";
import Heading from "../layout/Heading";

import GithubContext from "../context/githubContext";
const Home = () => {
  const githubContext = useContext(GithubContext);
  const { setBack, goBack } = githubContext;
  useEffect(() => {
    setBack(false);
  }, []);

  console.log(goBack);
  return (
    <Fragment>
      <Heading show={goBack} />
      <div className="container-fluid">
        <Search />
        <Users />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;
