import React, {Component} from 'react'
import './App.css';
import Navbar from './components/Navbar'
import UserItem from './components/UserItem'
import Users from './components/Users'
import axios from 'axios'
import Search from './components/Search'
import Alert from "./components/Alert"
  
  class App extends Component {

    state = {
      users: [],
      loading: false,
      alert: null
      
    }

    // async componentDidMount(){
    //   this.setState({loading: true})
    //  const res = await axios.get('https://api.github.com/users')
    //  console.log(res.data)
    //  this.setState({users: res.data, loading: false})
    // }
// Search users
    searchUsers = async (text) =>{
      this.setState({loading: true})
     const res = await axios.get(`https://api.github.com/search/users?q=${text}`))
     this.setState({users: res.data.items, loading: false})
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
        <div className="App">
          
          <Navbar title='GitHub Lookup' icon='fa fa-github'/>
            <div className="container">
              <Alert alert={this.state.alert}/>
              <Search 
                searchUsers={this.searchUsers} 
                setAlert={this.setAlert} 
                clearUsers={this.clearUsers} 
                displayClearBtn={this.state.users.length > 0 ? true : false} 
              />
            <Users users = {this.state.users} loading={this.state.loading}/>
          </div>
          
          
        </div>
      );
    }
  }
  
  export default App
  
  
