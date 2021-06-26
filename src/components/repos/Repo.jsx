import React from 'react'
import RepoItem from './RepoItem'

const Repo = ({repos}) => {
    console.log(repos)
    return (
        repos.map(repo =>
            <RepoItem repo={repo} key={repo.id}/>
        )
    )
}

export default Repo
