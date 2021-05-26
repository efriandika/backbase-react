import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { enableImperialUnits, enableMetricUnits } from '../../../redux/weather/actions';

export function Navbar() {
  const dispatch = useDispatch();
  const units = useSelector((state) => state.weather.units);

  function handleUnitSwitch(e) {
    if (e.target.checked) {
      dispatch(enableMetricUnits());
    } else {
      dispatch(enableImperialUnits());
    }
  }

  return (
    <nav className="navbar navbar-expand navbar-light navbar-weather">
      <div className="container">
        <Link className="navbar-brand text-brand text-primary" to="/">{process.env.REACT_APP_NAME}</Link>

        <div className="d-flex">
          F&deg;
          <div className="form-check form-switch ms-2">
            <input name="unit" className="form-check-input" type="checkbox" aria-checked={units === 'metric'} checked={units === 'metric'} onChange={handleUnitSwitch} aria-label="Metric Units Switcher" />
          </div>
          C&deg;
        </div>
      </div>
    </nav>
  );
}
