import React, { Fragment, useContext, useEffect } from "react";
import { useParams } from "react-router";

import Location from "./icons/location-con.svg";
import Company from "./icons/company-con.svg";
import link from "./icons/link.svg";
import Heading from "../layout/Heading";

import RepoItem from "../repo/RepoItem";
import GithubContext from "../context/githubContext";

const OneUser = () => {
  const githubContext = useContext(GithubContext);
  const { nameLogin } = useParams();

  const { getUser, getUserRepos, oneUser, repos, setLoading, setBack, goBack } =
    githubContext;

  useEffect(() => {
    setLoading();
    getUser(nameLogin);
    getUserRepos(nameLogin);
    setBack(true);
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    login,
    created_at,
    html_url,
    followers,
    following,
    public_repos,
  } = oneUser;

  // Converting Date
  let day = new Date(created_at).getDate();
  let month = new Date(created_at).getMonth() + 1;
  let year = new Date(created_at).getFullYear();
  const joined_date = day + " / " + month + " / " + year;

  return (
    <Fragment>
      <Heading show={goBack} />
      <div className="row mt-5 user-con ">
        <div className="container one-user-container mt-5 pt-4 col row">
          <div className="row user-info-container container">
            <div className="col-lg-4 pic-container">
              <img className="user-pic" src={avatar_url} />
            </div>

            <div className="col-lg-4 info-container">
              <span className="fullname">{name}</span> <br />
              <span className="username">@{login} </span> <br />
              <span className="bio">{bio} </span>
              <br />
            </div>

            <div className="col-lg-4 date-continer">
              <span className="date ms-2"> Joined {joined_date} </span>
            </div>
          </div>

          <div className="row text-center">
            {/* REPOS/FOLLOWERS/FOLLOWING CONTAINER============ */}

            <div className="number-container col-lg-6">
              <div class="row number-content">
                <div class="col-sm-12 col-md-4">
                  REPOS <br /> <span className="number">{public_repos}</span>
                </div>
                <div class="col-sm-12 col-md-4">
                  FOLLOWERS <br /> <span className="number">{followers}</span>
                </div>
                <div class="col-sm-12 col-md-4">
                  FOLLOWING <br /> <span className="number">{following}</span>
                </div>
              </div>
            </div>
            {/* Personal informations */}
            <div className="container personal-container col-lg-6">
              <div className="row">
                <div className="col-lg-6  col-sm-12 location">
                  <img src={Location} className="icons" /> {location}
                </div>
                <div className="col-lg-6 col-sm-12 company">
                  <img src={Company} className="icons" /> {company}
                </div>
              </div>

              <div className="row">
                <div className="col links">
                  <img src={link} className="icons" /> {html_url}
                </div>
              </div>
            </div>
            {/* ======================================= */}
          </div>

          {/* Repo Lists */}

          <div className="row user-container">
            {repos.map((repo) => (
              <div className="col-lg-4 col-sm-6 ">
                <RepoItem key={repo.id} repo={repo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const userStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "-5px",
  width: "540px",
  height: "155px",
  marginLeft: "190px",
};

export default OneUser;
