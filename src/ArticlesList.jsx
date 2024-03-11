import { useState } from "react";
import { fetchArticles } from "./api";
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then((articles) => {
      setArticles(articles);
    });
  }, [articles]);

  return (
    <div>
      <h2>Articles</h2>
      <ul>
        {articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))}
      </ul>
    </div>
  );
};

export default ArticlesList;
