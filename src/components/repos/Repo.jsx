import React, { useContext } from "react";
import RepoItem from "./RepoItem";
import GitHubContext from "../../context/github/githubContext";

const Repo = () => {
  const githubContext = useContext(GitHubContext);
  return githubContext.repos.map((repo) => (
    <RepoItem repo={repo} key={repo.id} />
  ));
};

export default Repo;
