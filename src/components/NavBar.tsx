import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div class="nav">
        <button><Link to="/">Home</Link></button>
        <button><Link to="/login">Login</Link></button>
    </div>
  )
}

export default NavBar