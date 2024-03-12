import ArticlesDropdown from "./ArticlesDropdown";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div>
        <h1>NC News</h1>
      <nav>
        <button><Link to="/">Articles</Link></button>
        <button>Profile</button>
        <button>Login</button>
      </nav>
    </div>
  );
};

export default Header;
