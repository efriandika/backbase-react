import styles from './About.module.scss';

export default function About() {
    return (
        <div className={`container text-center ${styles.container}`}>
          Find me on:

          <ul className="nav justify-content-center mt-2">
            <li className="nav-item">
              <a className="nav-link" href="https://www.linkedin.com/in/efriandika/" target="_blank" rel="noreferrer" title="Linkedin">
                <i className={`bi bi-linkedin ${styles.navIcon}`} role="img" aria-label="Linkedin" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/efriandika/" target="_blank" rel="noreferrer" title="Github">
                <i className={`bi bi-github ${styles.navIcon}`} role="img" aria-label="GitHub" />
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://stackoverflow.com/users/4668027/efriandika-pratama" target="_blank" rel="noreferrer" title="Stack Overflow">
                <i className={`bi bi-stack ${styles.navIcon}`} role="img" aria-label="Stack Overflow" />
              </a>
            </li>
          </ul>
        </div>
    );
}
