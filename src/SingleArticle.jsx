import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchArticle } from "./api"
import CommentsList from "./CommentsList"


const SingleArticle = ({selectedArticle}) => {
    console.log(selectedArticle)
    const [article, setArticle] = useState({})
    const {article_id} = useParams()

    useEffect(() => {
        fetchArticle(article_id).then((data) => {
            setArticle(data)
        })
    }, [])

console.log(article)
return ( 
    <div className="single-page">
        <div className="article">
        <h2 className="article-title">{article.title}</h2>
        <p className="article-topic">{article.topic}</p>
        <p className="article-author">{article.author}</p>
        <img src={article.article_img_url} className='article-image'></img>
        <p className="article-created">{article.created_at}</p>
        <p className="article-body">{article.body}</p>
        </div>
        <div className="comments">
            <button>{article.votes}</button>
            <p>Comments:{article.comment_count}</p>
            <CommentsList/>
        </div>
        
    </div>
)

}

export default SingleArticle