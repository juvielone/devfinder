import React, { useReducer } from "react";
import GithubReducer from "./githubReducer";
import GithubContext from "./githubContext";
import axios from "axios";

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {


    // Reducer State
    const initialState = {
        users: [],
        oneUser: {},
        repos: [],
        loading: false
    }

    // Reducer
    const [state, dispatch] = useReducer(GithubReducer, initialState);



    // Search =================================

    const onSearch = async (name) => {

        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${name}&client_id=$
                                {githubClientId}&client_secret=$
                                {githubClientSecret}`);
        dispatch({ type: "SEARCH_USER", payload: res.data.items });

    }

    // GET SINGLE USER ==========================
    const getUser = async (username) => {
        setLoading();

        const res = await axios.get(`https://api.github.com/users/${username}?&client_id=$
                                {githubClientId}&client_secret=$
                                {githubClientSecret}`);

        dispatch({ type: "GET_USER", payload: res.data });

    }

    // GET USER REPOS ==========================
    const getUserRepos = async (repoName) => {
        setLoading();

        const res = await axios.get(`https://api.github.com/users/${repoName}/repos?per_page=3&sort=created:asc&client_id=$
                                {githubClientId}&client_secret=$
                                {githubClientSecret}`);

        dispatch({ type: "GET_REPOS", payload: res.data });

    }


    // Set Loading =================
    const setLoading = () => dispatch({ type: "SET_LOADING" });


    return <GithubContext.Provider
        value={{
            users: state.users,
            oneUser: state.oneUser,
            repos: state.repos,
            loading: state.loading,
            setLoading,
            onSearch,
            getUser,
            getUserRepos
        }}
    >
        {props.children}

    </GithubContext.Provider>
}

export default GithubState;