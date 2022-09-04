import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
    </div>
  )
}

export default NavBar