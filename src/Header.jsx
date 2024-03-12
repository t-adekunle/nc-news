import ArticlesDropdown from "./ArticlesDropdown";
import { Link } from "react-router-dom";
import { UserContext } from "./contexts/User";

const Header = ({user, setUser}) => {

  console.log(user)
  console.log(UserContext)
  return (
    <div>
        <h1>NC News</h1>
      <nav>
        <button><Link to="/">Articles</Link></button>
        <button>Profile</button>
        <button><Link to='/signin'>Login</Link></button>
      </nav>
      <p></p>
    </div>
  );
};

export default Header;
