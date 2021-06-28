import React, { useState, useContext } from "react";
import GitHubContext from "../context/github/githubContext";
import AlertContext from "../context/alert/AlertContext";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const githubContext = useContext(GitHubContext);

  const alertContext = useContext(AlertContext);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (searchInput === "") {
      alertContext.showAlert("Please Enter a Value", "danger");
    } else {
      githubContext.searchUsers(searchInput);
      setSearchInput("");
    }
  };

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search Users"
          name="searchInput"
          value={searchInput}
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-primary btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </>
  );
};

export default Search;
