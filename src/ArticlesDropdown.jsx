import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";



const ArticlesDropdown = () => {

    const [topics, setTopics] = useState([])
    const [topic, setTopic] = useState({})

    useEffect(() => {
        fetchTopics().then((data) =>  {
            setTopics(data)
        })
    }, [])

return (
    <div class="dropdown">
  <button class="dropbtn" >Articles
  </button>
  <div class="dropdown-content" id="drop-down">
    <Link to={'/'}>All</Link>
    {topics.map((topic) => {
        return ( 
            <Link key={topic.slug} to={`/topics/${topic.slug}`} value={topic.slug}>{topic.slug}</Link>
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