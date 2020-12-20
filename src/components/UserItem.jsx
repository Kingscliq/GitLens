// https://api.github.com/users  -- GitHub Api

import React, { Fragment } from 'react'

const UserItem = (props) => {
            const {avatar_url, html_url } = props.user
        return (
           <Fragment> 
             <div className="card text-center">
                 <img 
                    src={avatar_url} 
                    alt='Mojombo' 
                    className='round-image' 
                    style={{width: '60px'}}
                />
                <br/>
                <h3>{props.user.login}</h3>
                <a href={html_url} className='btn btn-dark'>More</a>
             </div>
           </Fragment> 
        )
}


export default UserItem;
