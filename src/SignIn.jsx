import { useContext, useState } from "react";
import { UserContext } from "./contexts/User";
import { fetchUsers } from "./api";

const SignIn = () => {
  const { user, setUser } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [loginError, setLoginError] = useState('')
  const[isValidUser, setIsValidUser] = useState(true)
  

  
  const validateUser = (event) => {
    event.preventDefault();
    setLoginError('')
    setIsValidUser(false)
    fetchUsers().then((data) => {
      setUsers(data);
    });

    
    const validUser = users.filter((user) => { 
      return user.username === userName})

    console.log(validUser, 'validUser array')
      if (validUser.length === 1){
        // setIsValidUser(true)
        // setLoginError('')
        setUser(validUser[0].username)
        console.log(user, '<<<user when valid')
      }
      else{
        // setIsValidUser(false)
        setUser('')
        setLoginError('Invalid name or username')
      }
    // users.forEach((user) => {
    //     if(user.username === userName){
    //         setUser(user.username)
    //         setIsValidUser(true)
    //         setLoginError('')
    //     }
    //     else{
    //         setIsValidUser(false)
    //         setLoginError('Invalid name or username')
    //     }
    // })
    // console.log(loginError)
    // console.log(isValidUser)
    setUser('')
    console.log(user, 'user outside of function')
    
    setUserName('')
    setName('')
  };
 
    
  return (
    <form onSubmit={validateUser}>
      <label htmlFor="name">Name:</label>
      <input
        value={name}
        id="name"
        type="name"
        required
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>
      
      <label htmlFor="username">Username:</label>
      <input
        value={userName}
        id="username"
        required
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      ></input>
      <p id='login-error'>{loginError}</p>
      <br></br>

      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
