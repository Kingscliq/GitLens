import React, { Component } from 'react'

class Search extends Component {

 state ={
     searchInput: ''
 }
 handleChange = (e) =>{
    this.setState({[e.target.name]: e.target.value})
 }
 onSubmit = (e) =>{
     e.preventDefault();
    this.props.searchUsers(this.state.searchInput);
    this.setState({searchInput: ''})

 }

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
            <input 
            
                type="text"
                placeholder="Search Users" 
                name="searchInput" 
                value={this.state.textInput}
                onChange={this.handleChange}
            />
            <input 
                type="submit" 
                value="Search" 
                className="btn btn-dark btn-block"
            />
            </form>
        )
    }
}

export default Search
