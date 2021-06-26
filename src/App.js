import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'

import Users from './components/Users'
import axios from 'axios'
import Search from './components/Search'
import Alert from "./components/Alert"
import About from './components/About';
import User from './components/User'
  
  class App extends Component {

    state = {
      users: [],
      user:{},
      loading: false,
      alert: null,
      repos: []
      
    }

    // async componentDidMount(){
    //   this.setState({loading: true})
    //  const res = await axios.get('https://api.github.com/users')
    //  console.log(res.data)
    //  this.setState({users: res.data, loading: false})
    // }
// Search users
    searchUsers = async (text) => {
      this.setState({loading: true})
     const res = await axios.get(`https://api.github.com/search/users?q=${text}`)
     this.setState({users: res.data.items, loading: false})
    }
// Get Single User
    getUser = async username => {
      
      this.setState({loading: true})
      const res = await axios.get(`https://api.github.com/users/${username}`)
      this.setState({user: res.data, loading: false})
    
    }
  // Get User Repos
  getUserRepos = async username => {
    this.setState({loading: true})
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort="created:asc"`)
    this.setState({repos: res.data, loading: false})
  
  }

  // Clear Users
  clearUsers = () =>{
    this.setState({users: [], loading: false})
  }
  
  //Initialise Alert
  setAlert =(msg, type) => {
    this.setState({alert: {msg,type}})

    setTimeout(()=>{
      this.setState({alert: null})
    }, 3000)
  }
    render() {

      return (
        <Router>
        <div className="App">
          
          <Navbar title='GitLens' icon='fa fa-github'/>
            <div className="container">
              <Alert alert={this.state.alert}/>
              <Switch>
                <Route exact path='/'>
                  <Search 
                      searchUsers={this.searchUsers} 
                      setAlert={this.setAlert} 
                      clearUsers={this.clearUsers} 
                      displayClearBtn={this.state.users.length > 0 ? true : false} 
                    />
                  <Users users = {this.state.users} loading={this.state.loading}/>
                </Route>
                <Route path='/about'>
                  <About/>
                </Route>
                <Route 
                  path='/user/:login'
                  render = {props =>(
                    <User
                      {...props}
                      getUser = {this.getUser}
                      getUserRepos={this.getUserRepos}
                      user={this.state.user}
                      repos={this.state.repos}
                      loading = {this.state.loading}
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
  }
  
  export default App
  
  
