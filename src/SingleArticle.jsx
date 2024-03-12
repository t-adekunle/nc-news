import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchArticle } from "./api"
import CommentsList from "./CommentsList"
import Loading from "./Loading"


const SingleArticle = () => {
    const [article, setArticle] = useState({})
    const {article_id} = useParams()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetchArticle(article_id).then((data) => {
            setArticle(data)
            setIsLoading(false)
        })
    }, [])

if (isLoading) {
        return <Loading />;}
else{
return ( 
    <article className="single-page"> 
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
            <CommentsList article={article}/>
        </div>
        
        </article>
)}

}

export default SingleArticle