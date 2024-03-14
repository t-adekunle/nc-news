import { Link } from "react-router-dom"
import { useState } from "react"
import { fetchArticles } from "./api"


const SortArticlesMenu = ({setSearchParams}) => {


    const handleClick = (event) => {
        event.preventDefault()
        
    
    const sort = event.target.dataset.sort
    const order = event.target.dataset.order
   
        setSearchParams({sort_by: sort, order: order})

    }

    return (
        <div className="dropdown">
  <button className="dropbtn sort-button">Sort</button>
  <div className="dropdown-content">
  <Link data-sort="created_at" data-order="asc" onClick={handleClick} >Date (oldest first)</Link>
  <Link data-sort="created_at" data-order="desc" onClick={handleClick}>Date (newest first)</Link>
  <Link data-sort="comment_count" data-order="asc" onClick={handleClick}>Comments (ascending)</Link>
  <Link data-sort="comment_count" data-order="desc" onClick={handleClick}>Comments (descending)</Link>
  <Link data-sort="votes" data-order="asc" onClick={handleClick}>Votes (ascending)</Link>
  <Link data-sort="votes" data-order="desc" onClick={handleClick}>Votes (descending)</Link>
  </div>
</div>
    )
}

export default SortArticlesMenu