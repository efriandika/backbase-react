import { NavLink } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="footer">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://efriandika.github.io/backbase-react" target="_blank">Live Demo</a>
        </li>
      </ul>

      <div className="footer-text">
        Made with love for Backbase Interview Assignment.
      </div>

      <div className="author">
        <a href="https://www.linkedin.com/in/efriandika/" target="_blank">
          Efriandika Pratama
        </a>
      </div>
    </footer>
  );
}
