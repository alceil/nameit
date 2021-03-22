import React from 'react'
import './SearchBox.css'
const SearchBox = ({handleInputChange})=>{  
    return(
        <div className="search-container">
            <input onChange={(e)=>handleInputChange(e.target.value)} placeholder="Type Keywords" className="search-input"></input>
        </div>
    );
}
export default SearchBox