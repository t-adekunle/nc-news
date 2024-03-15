import { useState, useEffect } from "react";
import { postComment } from "./api";
import { useContext } from "react";
import { UserContext } from "./contexts/User";
import { Link } from "react-router-dom";

const CommentAdder = ({ setComments, article, isPosted, setIsPosted}) => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [comment, setComment] = useState("");
  const [err, setErr] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(null)
  const username = loggedInUser.username;

  useEffect(() => {
    if (Object.keys(loggedInUser).length === 3){
      setIsLoggedIn(true)
      setIsDisabled(false)
    }
    else if (Object.keys(loggedInUser).length === 0){
    setIsLoggedIn(false)
    setIsDisabled(true)
  }
  },[loggedInUser])
  


  const handleClick = (event) => {
    event.preventDefault();
    setIsPosted(false)
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
        setComments((currComments) => {
          setIsPosted(true)
          return [data, ...currComments]
        })
        setIsDisabled(false)
    })
    .catch((err)  => {
        setComments((currComments) => {
          setIsPosted(false)
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
      {isLoggedIn ? null : <p className="bold">Please <Link to='/signin'>sign in</Link> to add a comment</p>}
      <label htmlFor="comment">Add a comment:</label>
      <input
        id="comment"
        value={comment} required
        onChange={(event) => {
          setComment(event.target.value);
        }} disabled={isDisabled}
      ></input>
      {err ? <p className="error">{err}</p>: null}
      <button disabled={isDisabled}>Post</button>
     
    </form>
  );
};

export default CommentAdder;
