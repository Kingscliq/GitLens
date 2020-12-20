import React from 'react'
import '../App.css'


function Navbar(props){
    return (
        <React.Fragment>
            <div className ="navbar bg-primary"><h1><i className={props.icon}></i>{props.title}</h1> </div>
        </React.Fragment>
        )
}

export default Navbar
