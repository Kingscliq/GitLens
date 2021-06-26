import React from 'react'
import UserItem from './UserItem'
import Spinner from './Spinner'

    const Users = (props) => {
        if(props.loading){
            return <Spinner/>
        } else{
            console.log(props.users)
            return (
                <div style={userStyle}>
                  {props.users.map(user => (
                     <UserItem key={user.id} user={user}/>
                  ))}  
                </div>
            )
        }
       
    }

const userStyle ={
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '1rem'
}

export default Users
