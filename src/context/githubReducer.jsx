import React from "react";

function Reducer(state, action) {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "GET_USER_API":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case "SEARCH_USER":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case "GET_USER":
      return {
        ...state,
        oneUser: action.payload,
        loading: false,
      };

    case "GET_REPOS":
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case "SET_BACK":
      return {
        ...state,
        goBack: action.payload,
      };

    default:
      break;
  }
}

export default Reducer;
