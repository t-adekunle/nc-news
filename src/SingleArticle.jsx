import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle, patchArticle } from "./api";
import CommentsList from "./CommentsList";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import { UserContext } from "./contexts/User";
import { useContext } from "react";

const SingleArticle = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [pageErr, setPageErr] = useState(null)
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    if (Object.keys(loggedInUser).length === 3){
      setIsDisabled(false)
    }
    else if (Object.keys(loggedInUser).length === 0){
    setIsDisabled(true)
  }
    setIsLoading(true);
    setErr(null);
    fetchArticle(article_id).then((data) => {
      setArticle(data);
      setIsLoading(false);
    }).catch((err) => {
      setIsLoading(false)
      setPageErr(`${err.response.status} ${err.response.data.msg}`)
    })
  
  }, [loggedInUser]);

  const sendLike = (article_id, likes) => {
    setArticle((currArticle) => {
      if (currArticle.article_id === article_id) {
        setErr(null);
        return { ...currArticle, votes: article.votes + likes };
      } else {
        setErr("Something went wrong, please try again");
      }
    });
    patchArticle(article_id, likes)
      .then(() => {})
      .catch((err) => {
        setArticle((currArticle) => {
          setErr("Something went wrong, please try again");
          return { ...currArticle, votes: article.votes };
        });
      });
  };
  if (isLoading) {
    return <Loading />;
  } 
  else if (pageErr){
    return <ErrorPage pageErr = {pageErr}/>
  }
    else {
    return (
      <article className="single-page">
        <div className="article">
          <h2 className="article-title">{article.title}</h2>
          <p className="article-topic">{article.topic}</p>
          <p className="article-author">{article.author}</p>
          <img src={article.article_img_url} className="article-image" alt='article image'></img>
          <p className="article-created">{article.created_at}</p>
          <p className="article-body">{article.body}</p>
        </div>
        <div className="comments">
          {err ? <p className="error">{err}</p> : null}
          <button disabled={isDisabled}
            className="vote-btn"
            aria-label="click to up vote article"
            onClick={() => {
              sendLike(article.article_id, 1);
            }}
          >
            &#8679;
          </button>
          <button disabled={isDisabled}
            className="vote-btn"
            aria-label="click to down vote article"
            onClick={() => {
              sendLike(article.article_id, -1);
            }}
          >
            &#8681;
          </button>
          <p>Votes: {article.votes}</p>
          <p>Comments: {article.comment_count}</p>
          <CommentsList article={article} />
        </div>
      </article>
    );
  }
};

export default SingleArticle;
