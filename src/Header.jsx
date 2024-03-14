import ArticlesDropdown from "./ArticlesDropdown";
import { Link } from "react-router-dom";
import { UserContext } from "./contexts/User";

const Header = () => {

  
  return (
    <div>
        <h1>NC News</h1>
      <nav>
        <ArticlesDropdown />
        {/* <button><Link to="/">All Articles</Link></button> */}
        <button className="btn">Profile</button>
        <button className="btn"><Link to='/signin'>Login</Link></button>
      </nav>
      <p></p>
    </div>
  );
};

export default Header;
