import { useContext } from "react";
import { UserContext } from "./contexts/User";
import { Link } from "react-router-dom";


const UserCard = ({user}) => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);

    const handleClick = (event) => {
        event.preventDefault()
        setLoggedInUser(user)
    }

return (
    <div className = 'user-card'>
        <h3>{user.name}</h3>
        <img src={user.avatar_url}></img>
        <p>{user.username}</p>
        <button onClick={handleClick}><Link to={'/'}>Sign In</Link></button>
    </div>
)
}

export default UserCard