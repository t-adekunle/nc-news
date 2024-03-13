import { useState } from "react";
import { postComment } from "./api";

const CommentAdder = ({ setComments, article }) => {
  const [comment, setComment] = useState("");
  const [err, setErr] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false)
  const username = "grumpy19";

  const handleClick = (event) => {
    event.preventDefault();
    setIsDisabled(true)
    const commentToAdd = {
      author: username,
      created_at: Date.now(),
      body: comment,
      votes: 0,
    };
    setComments((currComments) => {
        setErr(null)
      return [commentToAdd, ...currComments];
    });

    postComment(article.article_id, username, comment).then((data) => {
        setIsDisabled(false)
    })
    .catch((err)  => {
        setComments((currComments) => {
            const commentsCopy = [...currComments]
            commentsCopy.shift()
            setErr('Something went wrong, please try again')
             return commentsCopy
        })
    })
    setComment('')
  };
  return (
    <form onSubmit={handleClick}>
      <label htmlFor="comment">Add a comment:</label>
      <input
        id="comment"
        value={comment} required
        onChange={(event) => {
          setComment(event.target.value);
        }} disabled={isDisabled}
      ></input>
      {err ? <p className="error">{err}</p>: null}
      <button>Post</button>
    </form>
  );
};

export default CommentAdder;