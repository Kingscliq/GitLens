import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "./Spinner";
import GitHubContext from "../context/github/githubContext";

const Users = () => {
  const githubContext = useContext(GitHubContext);
  if (githubContext.loading) {
    return <Spinner />;
  } else {
    console.log(githubContext.users);
    return (
      <div style={userStyle}>
        {githubContext.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridGap: "1rem",
};

export default Users;
