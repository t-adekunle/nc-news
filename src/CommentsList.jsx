import { deleteComment, fetchCommentsByArticle } from "./api";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "./contexts/User";
import CommentAdder from "./CommentAdder";
import Loading from "./Loading";

const CommentsList = ({ article }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [activeComment, setActiveComment] = useState({});
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [isSignedIn, setIsSignedIn] = useState(null);
  const [err, setErr] = useState(null);

  const user = 'grumpy19';


  useEffect(() => {
    setErr(null);
    setIsLoading(true);
    fetchCommentsByArticle(article.article_id).then((data) => {
      setComments(data);
      setIsLoading(false);
    });
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    setErr(null);
    setIsDisabled(true);

    const comment_id = Number(event.target.parentElement.id);
    const commentClickedArr = comments.filter(
      (comment) => comment.comment_id === comment_id
    );
    const commentClicked = commentClickedArr[0];
    setActiveComment(commentClicked);
    const originalCommentsCopy = JSON.parse(JSON.stringify(comments));
    const indexOfDelete = comments.indexOf(commentClicked);

    setComments((currComments) => {
      const commentsCopy = currComments.toSpliced(indexOfDelete, 1, {
        body: "Comment deleted",
      });
      return commentsCopy;
    });

    deleteComment(event.target.parentElement.id)
      .then(() => {
        setIsDisabled(false);
      })
      .catch((err) => {
        setErr("Something went wrong, please try again");
        setComments(originalCommentsCopy);
        setIsDisabled(false);
      });
  };

  if (isLoading) {
    return <Loading />;
  } else if (comments.length === 0) {
    return <p>This article has no comments</p>;
  } else {
    return (
      <div>
       
        <CommentAdder setComments={setComments} article={article} />
        {comments.map((comment) => {
          return (
            <div
              key={comment.comment_id}
              id={comment.comment_id}
              className="comment"
            >
              {activeComment.comment_id === comment.comment_id ? (
                <p className="error">{err}</p>
              ) : null}
              <p className="comment-author">{comment.author}</p>
              <p className="comment-created-at">{comment.created_at}</p>
              <p className="comment-body">{comment.body}</p>
              <p className="comment-votes">Votes: {comment.votes}</p>
              <button disabled={isDisabled}>Vote &#8679;</button>
              <button
                disabled={comment.author === user && !isDisabled ? false : true}
                onClick={handleClick}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
};

export default CommentsList;
