import React from "react"
import './SearchBox.scss'

const SearchBox = (props) => {
  
  return (
    <div className="search-box" onClick={props.handleClick}>{props.label}</div>
  )
} 

export default SearchBox