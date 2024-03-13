import { useState, useEffect } from "react";
import { fetchCommentsByArticle } from "./api";
import CommentAdder from "./CommentAdder";
import Loading from "./Loading";

const CommentsList = ({ article }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchCommentsByArticle(article.article_id).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loading />;
  } else if (comments.length === 0) {
    return <p>This article has no comments</p>;
  } else {
    return (
      <div>
        <CommentAdder setComments = {setComments} article={article} />
        {comments.map((comment) => {
          return (
            <div key={comment.comment_id} className="comment">
              <p className="comment-author">{comment.author}</p>
              <p className="comment-created-at">{comment.created_at}</p>
              <p className="comment-body">{comment.body}</p>
              <p className="comment-votes">Votes: {comment.votes}</p>
              <button>Vote &#8679;</button>
              <button>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }
};

export default CommentsList;
