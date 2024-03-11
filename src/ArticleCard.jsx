const ArticleCard = ({ article }) => {

  return (
    <div className="article-card">
      <li>
        <h3 className="article-card-title">{article.title}</h3>
        <p className="article-card-author">{article.author}</p>
        <p className="article-card-date">{article.created_at}</p>
        <p className="article-card-votes">{article.votes}</p>
        <p className="article-card-comment-count">{article.comment_count}</p>
      </li>
    </div>
  );
};

export default ArticleCard;
