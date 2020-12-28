import React, {Component} from 'react'
import './App.css';
import Navbar from './components/Navbar'
import UserItem from './components/UserItem'
import Users from './components/Users'
import axios from 'axios'
import Search from './components/Search'
  
  class App extends Component {

    state= {
      users: [],
      loading: false
    }

    // async componentDidMount(){
    //   this.setState({loading: true})
    //  const res = await axios.get('https://api.github.com/users')
    //  console.log(res.data)
    //  this.setState({users: res.data, loading: false})
    // }

    searchUsers = async (text) =>{
      this.setState({loading: true})
     const res = await axios.get(`https://api.github.com/search/users?q=${text}`)
     console.log(res.data)
     this.setState({users: res.data.items, loading: false})
    }
    render() {
      return (
        <div className="App">
          
          <Navbar title='GitHub Lookup' icon='fa fa-github'/>
          <div className="container">
            <Search searchUsers={this.searchUsers}/>
            <Users users = {this.state.users} loading={this.state.loading}/>
          </div>
          
          
        </div>
      );
    }
  }
  
  export default App
  
  
