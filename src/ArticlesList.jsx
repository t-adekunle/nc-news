import { useState } from "react";
import { fetchArticles } from "./api";
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    fetchArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false)
    });
  }, []);

  if (isLoading) {
    return <Loading />;}
else{
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
}

};

export default ArticlesList;
