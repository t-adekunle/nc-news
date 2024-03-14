import { useState } from "react";
import { fetchArticles } from "./api";
import { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import { useParams, useSearchParams } from "react-router-dom";
import SortArticlesMenu from "./SortArticlesMenu";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const {topic} = useParams()
  let [searchParams, setSearchParams] = useSearchParams()


  useEffect(() => {
    setIsLoading(true)
    fetchArticles(topic, searchParams).then((articles) => {
      setArticles(articles);
      setIsLoading(false)
    });
  }, [topic, searchParams]);

  if (isLoading) {
    return <Loading />;}
else{
    return (
        <div>
          <h2>{topic} Articles</h2>
          <SortArticlesMenu setSearchParams = {setSearchParams} searchParams = {searchParams}/>
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
