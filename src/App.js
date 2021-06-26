import React, {useState}  from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'

import Users from './components/Users'
import axios from 'axios'
import Search from './components/Search'
import Alert from "./components/Alert"
import About from './components/About';
import User from './components/User'
  
  const App = () => {
const [users, setUsers] = useState([])
const [user, setUser] = useState({})
const [loading, setLoading] = useState(false)
const [alert, setAlert] = useState(null)
const [repos, setRepos] = useState([])

    // state = {
    //   users: [],
    //   user:{},
    //   loading: false,
    //   alert: null,
    //   repos: []
      
    // }

 
// Search users
   const searchUsers = async (text) => {
      setLoading(true)
     const res = await axios.get(`https://api.github.com/search/users?q=${text}`)
    setUsers(res.data.items)
    setLoading(false)
    }
// Get Single User
    const getUser = async username => {
      
      setLoading(true)
      const res = await axios.get(`https://api.github.com/users/${username}`)
      setUser(res.data)
      setLoading(false)
    
    }
  // Get User Repos
  const getUserRepos = async username => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort="created:asc"`)
    setRepos(res.data)
    setLoading(false)
  
  }

  // Clear Users
  const clearUsers = () =>{
    setUsers([])
    setLoading(false)
  }
  
  //Initialise Alert
  const showAlert =(msg, type) => {
    setAlert({msg, type})

    setTimeout(()=>{
      setAlert(null)
      setLoading(false)
    }, 3000)
  }
   

      return (
        <Router>
        <div className="App">
          
          <Navbar title='GitLens' icon='fa fa-github'/>
            <div className="container">
              <Alert alert={alert}/>
              <Switch>
                <Route exact path='/'>
                  <Search 
                      searchUsers={searchUsers} 
                      showAlert={showAlert} 
                      clearUsers={clearUsers} 
                      displayClearBtn={users.length > 0 ? true : false} 
                    />
                  <Users users = {users} loading={loading}/>
                </Route>
                <Route path='/about'>
                  <About/>
                </Route>
                <Route 
                  path='/user/:login'
                  render = {props =>(
                    <User
                      {...props}
                      getUser = {getUser}
                      getUserRepos={getUserRepos}
                      user={user}
                      repos={repos}
                      loading = {loading}
                    />
                  )}

                 >
                                   
                </Route>
                  

              </Switch>
              
          </div>
          
          
        </div>
        </Router>
      );
    }
  
  
  export default App
  
  
