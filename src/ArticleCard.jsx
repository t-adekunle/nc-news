import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {

  return (
    <div className="article-card">
      <li>
       <Link to={`/articles/${article.article_id}`} 
       ><h3 className="article-card-title">{article.title}</h3></Link> 
        <p className="article-card-author">{article.author}</p>
        <p className="article-card-date">{article.created_at}</p>
        <p className="article-card-votes">Votes: {article.votes}</p>
        <p className="article-card-comment-count">Comments: {article.comment_count}</p>
      </li>
    </div>
  );
};

export default ArticleCard;
