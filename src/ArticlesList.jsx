import { useState } from "react";
import { fetchArticles } from "./api";
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const {topic} = useParams()


  useEffect(() => {
    setIsLoading(true)
    fetchArticles(topic).then((articles) => {
      setArticles(articles);
      setIsLoading(false)
    });
  }, [topic]);

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
