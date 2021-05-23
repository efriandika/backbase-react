import { Link, NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light navbar-weather">
      <div className="container">
        <Link className="navbar-brand text-brand text-primary" to="/">{process.env.REACT_APP_NAME}</Link>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
