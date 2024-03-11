import { Link } from "react-router-dom";

const ArticleCard = ({ article, setSelectedArticle }) => {

    const handleClick = (article_id) => {
        console.log(article_id)
        setSelectedArticle(article_id)
    }
  return (
    <div className="article-card">
      <li>
       <Link to={`/articles/${article.article_id}`} onClick = {() => {
        handleClick(article.article_id)
       }} ><h3 className="article-card-title">{article.title}</h3></Link> 
        <p className="article-card-author">{article.author}</p>
        <p className="article-card-date">{article.created_at}</p>
        <p className="article-card-votes">{article.votes}</p>
        <p className="article-card-comment-count">{article.comment_count}</p>
      </li>
    </div>
  );
};

export default ArticleCard;
