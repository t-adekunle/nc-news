// import { useContext, useEffect, useState } from "react";
// import { UserContext } from "./contexts/User";
// import { fetchUsers } from "./api";

// const SignInForm = () => {
//   const { loggedInUser, setLoggedInUser } = useContext(UserContext);
//   const [userName, setUserName] = useState("");
//   const [name, setName] = useState("");
//   const [users, setUsers] = useState([]);
//   const [err, setErr] = useState(null);
//   const [loginError, setLoginError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false)


//   useEffect(() => {
//     setIsLoading(true)
//     fetchUsers().then((data) => {
//       setErr (null)
//       setIsLoading(false)
//       setUsers(data)
//     }).catch((err) => {
//       setErr("Something went wrong, please try again");
//     })
//   })

//   const validateUser = (event) => {
//     event.preventDefault();
//     setLoginError(null);

//     fetchUsers()
//       .then((data) => {
//         setUsers(data);
//         setErr(null)

//         const validUser = [];
//         for (let i = 0; i < data.length; i++) {
//           if (data[i].username === userName) {
//             validUser.push(data[i]);

//             setLoginError(null);
//           }
//         }
//         if (validUser.length === 0) {
//           setLoginError("Invalid password or username");
//         }

//         setLoggedInUser(validUser[0]);
//         console.log(loggedInUser)
//       })
//       .catch((err) => {
//         setErr("Something went wrong, please try again");
//       });
//     setName("");
//     setUserName("");
    
//   };

//   return (
//     <form onSubmit={validateUser}>
//       <label htmlFor="name">Name:</label>
//       <input
//         value={name}
//         id="name"
//         type="name"
//         required
//         onChange={(event) => {
//           setName(event.target.value);
//         }}
//       ></input>

//       <label htmlFor="username">Username:</label>
//       <input
//         value={userName}
//         id="username"
//         required
//         onChange={(event) => {
//           setUserName(event.target.value);
//         }}
//       ></input>
//       <br></br>
//       {err ? <p className="error">{err}</p> : null}
//       {loginError ? (
//         <p className="error" id="login-error">
//           {loginError}
//         </p>
//       ) : null}
//       <br></br>
//       <button type="submit">Sign In</button>
//     </form>
//   );
// };

// export default SignInForm;
