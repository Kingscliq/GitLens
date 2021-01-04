import React from 'react'
import UserItem from './UserItem'
import Spinner from './Spinner'

// https://avatars0.githubusercontent.com/u/2?v=4
//https://github.com/defunkt



//https://avatars0.githubusercontent.com/u/4?v=4
// https://github.com/wycats

    // state ={
    //     users: [
    //             {
    //                 id: '1',
    //                 login: 'mojombo',
    //                 avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    //                 html_url: 'https://github.com/mojombo',
    //             },
    //             {
    //                 id: '2',
    //                 login: 'defunkt',
    //                 avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
    //                 html_url: 'https://github.com/defunkt',
    //             },
    //             {
    //                 id: '3',
    //                 login: 'wycats',
    //                 avatar_url: 'https://avatars0.githubusercontent.com/u/4?v=4',
    //                 html_url: 'https://github.com/wycats',
    //             }
    //     ]
    // }
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
