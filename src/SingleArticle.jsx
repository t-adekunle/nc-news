import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchArticle, patchArticle } from "./api"
import CommentsList from "./CommentsList"
import Loading from "./Loading"



const SingleArticle = () => {
    const [article, setArticle] = useState({})
    const {article_id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        setIsError(false)
        fetchArticle(article_id).then((data) => {
            setArticle(data)
            setIsLoading(false)
        })
    }, [])

   const sendLike = (article_id, likes) => {
        setArticle((currArticle) => {
            if (currArticle.article_id === article_id){
                return {...currArticle, votes: article.votes + likes}
            }
            
        })
        patchArticle(article_id, likes).then((response) => {
            if(response.status === 404 || response.status === 400 ){
                setIsError(true)
            }
        })
    }
if (isLoading) {
        return <Loading />;}

else if (isError) {
    return <h3 className="error">Error. Like not counted, please try again</h3>
}
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
            <button className = 'vote-btn' aria-label="click to up vote article" onClick={() => {
                sendLike(article.article_id, 1)
            }}>&#8679;</button><button className="vote-btn" aria-label="click to down vote article" onClick={() => {
                sendLike(article.article_id, - 1)
            }}>&#8681;</button><p>Votes: {article.votes}</p>
            <p>Comments: {article.comment_count}</p>
            <CommentsList article={article}/>
        </div>
        
        </article>
)}

}

export default SingleArticle