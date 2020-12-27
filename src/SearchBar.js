import React from 'react';
import TextField from '@material-ui/core/TextField';
import './SearchBar.css'
function SearchBar(props) {
    
    return(
        <div className = 'searchBar'>
            <form>
                <TextField id="standard-search" label="Search here..." type="search" onChange={props.handleInput}/>
            </form>
        </div>
    )
}
export default SearchBar;