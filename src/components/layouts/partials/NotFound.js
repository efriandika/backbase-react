import { Link } from 'react-router-dom';

export function NotFound() {
    return (
        <div className="d-flex justify-content-center align-items-center flex-column" style={{ height: '200px' }}>
          <div style={{ fontSize: '80px' }}>
            <i className="bi bi-emoji-frown" />
          </div>

          The page you are looking for is not found

          <div className="mt-4">
            <Link className="btn btn-primary" to="/">Go to Dashboard</Link>
          </div>
        </div>
    );
}
