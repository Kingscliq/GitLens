import React, {Fragment} from 'react'
import '../App.css'
import { Link } from 'react-router-dom'


function Navbar(props){
    return (
        <Fragment>
            <div className ="navbar bg-primary">
                <h1><i className={props.icon}></i>&nbsp;{props.title}</h1> 
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </Fragment>
        )
}

export default Navbar
