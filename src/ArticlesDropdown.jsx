import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { fetchTopics } from "./api";



const ArticlesDropdown = () => {

    const [topics, setTopics] = useState([])
    const [topic, setTopic] = useState({})

    useEffect(() => {
        fetchTopics().then((data) =>  {
            setTopics(data)
        })
    }, [])

return (

<div className="dropdown">
  <button className="dropbtn">Articles</button>
  <div className="dropdown-content">
  <Link to={'/'}>All</Link>
  {topics.map((topic) => {
        return ( 
            <Link key={topic.slug} to={`/topics/${topic.slug}`} value={topic.slug}>{topic.slug.charAt(0).toUpperCase()+topic.slug.slice(1)}</Link>
        )
    })}
  </div>
</div>

)
}
/**
 * build dropdown
 * have each link will link to /topics/topic
 */

export default ArticlesDropdown