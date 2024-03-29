import ArticlesDropdown from "./ArticlesDropdown";
import { Link } from "react-router-dom";
import { UserContext } from "./contexts/User";
import { useContext } from "react";

const Header = () => {

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  
  return (
    <div>
        <h1>NC News</h1>
      <nav className="nav">
        <ArticlesDropdown />
        <button className="btn"><Link to='/signin'>Login</Link></button>
        {Object.keys(loggedInUser).length === 3 ? <div><p>Welcome {loggedInUser.name}</p> <img className="user-thumbnail" src={loggedInUser.avatar_url}alt ='user profile picture' ></img></div> : <p>Welcome</p>}
      
      </nav>
    </div>
  );
};

export default Header;
