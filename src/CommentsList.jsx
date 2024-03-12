import { useState, useEffect } from "react"
import { fetchCommentsByArticle } from "./api"

const CommentsList = ({article}) =>{
    const [comments, setComments] = useState([])
 
    useEffect(() => {
        fetchCommentsByArticle(article.article_id).then((data)=>{
            
            setComments(data)
        })
    }, [])

    return(
        <div>
            {comments.map((comment) => {
                return <div key={comment.comment_id} className = 'comment'>
                    <p className = 'comment-author'>{comment.author}</p>
                    <p className = 'comment-created-at'>{comment.created_at}</p>
                    <p className = 'comment-body'>{comment.body}</p>
                    <p className = 'comment-votes'>Votes: {comment.votes}</p>
                    <button>Vote &#8679;</button>
                    <button>Delete</button>
                </div>
            })}
        </div>
    )
}



export default CommentsList