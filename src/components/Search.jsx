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
            <>
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
            {this.props.displayClearBtn && (
                <button 
                    className="btn btn-light btn-block" 
                    onClick={this.props.clearUsers}>
                    Clear
                    </button>
            )} 
            
            </>
        )
    }
}

export default Search
