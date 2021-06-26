import React, {useState} from 'react'

const Search = ({showAlert, searchUsers, clearUsers, displayClearBtn }) => {

const [searchInput, setSearchInput,] = useState('')


 const handleChange = (e) =>{
    setSearchInput(e.target.value)
 }
 const onSubmit = (e) =>{
     e.preventDefault();
     if(searchInput === ''){
        showAlert('Please Enter a Value', 'danger')
     }else{
        searchUsers(searchInput);
        setSearchInput("")
     }
  

 }

        return (
            <>
            <form className="form" onSubmit={onSubmit}>
            <input 
            
                type="text"
                placeholder="Search Users" 
                name="searchInput" 
                value={searchInput}
                onChange={handleChange}
            />
            <input 
                type="submit" 
                value="Search" 
                className="btn btn-primary btn-block"
            />
            </form>
            {displayClearBtn && (
                <button 
                    className="btn btn-light btn-block" 
                    onClick={clearUsers}>
                    Clear
                    </button>
            )} 
            
            </>
        )
    }

export default Search
