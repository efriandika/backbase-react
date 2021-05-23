import { Link, NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-brand" to="/">{process.env.REACT_APP_NAME}</Link>

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
