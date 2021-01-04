// https://api.github.com/users  -- GitHub Api

import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';

const UserItem = (props) => {
      const {avatar_url, html_url, login } = props.user
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
                <Link to={`/user/${login}`} className='btn btn-dark'>More</Link>
             </div>
           </Fragment>
        )
}


export default UserItem;
