import React, {Component} from 'react'
import './App.css';
import Navbar from './components/Navbar'
import UserItem from './components/UserItem'
import Users from './components/Users'
import axios from 'axios'
  
  class App extends Component {

    state= {
      users: [],
      loading: false
    }

    async componentDidMount(){
      this.setState({loading: true})
     const res = await axios.get('https://api.github.com/users')
     console.log(res.data)
     this.setState({users: res.data, loading: false})
    }
    render() {
      return (
        <div className="App">
          
          <Navbar title='GitHub Lookup' icon='fa fa-github'/>
          <div className="container">
            <Users users = {this.state.users} loading={this.state.loading}/>
          </div>
          
          
        </div>
      );
    }
  }
  
  export default App
  
  
