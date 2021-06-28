import React, { useReducer } from "react";
import axios from "axios";

import GitHubContext from "./githubContext";
import GitHubReducers from "./gitHubReducers";

import {
  SEARCH_USERS,
  SET_LOADING,
  GET_REPOS,
  GET_USER,
  CLEAR_USERS,
} from "../types";

const GlobalState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GitHubReducers, initialState);

  //  Search Users
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    //   setUsers(res.data.items)

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };
  // Get Single User

  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}`);
    dispatch({ type: GET_USER, payload: res.data });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });
  // setAlert

  //  Get User Repos
  const getUserRepos = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort="created:asc"`
    );
    dispatch({ type: GET_REPOS, payload: res.data });
  };
  //Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GitHubContext.Provider>
  );
};

export default GlobalState;
