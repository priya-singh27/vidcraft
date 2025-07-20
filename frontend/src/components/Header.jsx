import {Link} from 'react-router-dom'
import '../App.css'

export default function Header(){
    return (
      <div className="header">
        <div className="logo">HOME</div>
        <nav className="nav">
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
          <Link className="nav-link" to="/logout">
            Logout
          </Link>
        </nav>
      </div>
    );
} 