import React, { Component } from 'react'

 class User extends Component {
     componentDidMount(){
         this.props.getUser(this.props.match.params.login);
         console.log(this.props.user)
     }

    render(){
        const { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable } = this.props.user;
        const {loading} = this.props
        return (
            <div>{location} &nbsp; {name} &nbsp; {hireable}
            <img src={avatar_url} alt=""/>
            </div>
            
        )
    }
}

export default User
