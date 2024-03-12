import { useState } from "react"
import { postComment } from "./api"

const CommentAdder = ({setComments, article}) => {
    const [comment, setComment] = useState('')
    const username = 'hardcoded_user'
   
    const handleClick = (event) =>{
        event.preventDefault()

        
    
        const commentToAdd = {author: username, created_at: Date.now(), body: comment, votes: 0}
        setComments ((currComments) => {
            return [commentToAdd, ...currComments]
        })


        postComment(article.article_id, username, comment).then((data) => {
            console.log(data)
        //   setComments ((currComments) => {
        //     return [data, ...currComments]
        //   })
        })
    }
return (
    <form onSubmit={handleClick}>
        <label htmlFor="comment">Add a comment:</label>
        <input id="comment" value={comment} onChange = {(event) => {
            setComment(event.target.value)
            
        }}></input>
        <button>Post</button>
    </form>
)
}

export default CommentAdder