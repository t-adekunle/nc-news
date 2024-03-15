import { useContext, useEffect, useState } from "react";
import { UserContext } from "./contexts/User";
import { fetchUsers } from "./api";
import UserCard from "./UserCard";

const SignIn = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [err, setErr] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchUsers()
      .then((data) => {
        setErr(null);
        setIsLoading(false);
        setUsers(data);
      })
      .catch((err) => {
        setErr("Something went wrong, please try again");
      });
  }, [users]);

  return (
    <div>
      <h2>Click your account to sign in</h2>
    
        {users.map((user) => {
         return <UserCard key={user.username} user={user} />;
        })}
    
    </div>

    // <form onSubmit={validateUser}>
    //   <label htmlFor="name">Name:</label>
    //   <input
    //     value={name}
    //     id="name"
    //     type="name"
    //     required
    //     onChange={(event) => {
    //       setName(event.target.value);
    //     }}
    //   ></input>

    //   <label htmlFor="username">Username:</label>
    //   <input
    //     value={userName}
    //     id="username"
    //     required
    //     onChange={(event) => {
    //       setUserName(event.target.value);
    //     }}
    //   ></input>
    //   <br></br>
    //   {err ? <p className="error">{err}</p> : null}
    //   {loginError ? (
    //     <p className="error" id="login-error">
    //       {loginError}
    //     </p>
    //   ) : null}
    //   <br></br>
    //   <button type="submit">Sign In</button>
    // </form>
  );
};

export default SignIn;
