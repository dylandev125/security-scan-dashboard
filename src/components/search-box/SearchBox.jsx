import React from "react"
import './SearchBox.scss'
import { ReactComponent as SearchIcon } from '../../assets/edit-search.svg';

const SearchBox = (props) => {
  
  return (
    <div className="search-box" onClick={props.handleClick}>
      <SearchIcon />
      <input type="text" placeholder="Search something..."></input>
    </div>
  )
} 

export default SearchBox