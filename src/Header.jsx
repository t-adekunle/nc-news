import ArticlesDropdown from "./ArticlesDropdown";
import { Link } from "react-router-dom";
import { UserContext } from "./contexts/User";
import { useContext } from "react";

const Header = () => {

  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  
  return (
    <div>
        <h1>NC News</h1>
      <nav>
        <ArticlesDropdown />
        {/* <button><Link to="/">All Articles</Link></button> */}
        <button className="btn">Profile</button>
        <button className="btn"><Link to='/signin'>Login</Link></button>
      </nav>
      {Object.keys(loggedInUser).length === 3 ? <p>Welcome {loggedInUser.name} </p> : <p>Welcome</p>}
    </div>
  );
};

export default Header;
