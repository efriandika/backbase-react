import { useDispatch, useSelector } from 'react-redux';
import { closeWeatherForecast } from '../../../redux/app/actions';
import { WeatherForecast } from '../../weather-forecast/WeatherForecast';

export function Drawer() {
  const dispatch = useDispatch();
  const drawerIsOpen = useSelector((state) => state.app.drawer);
  const selectedCity = useSelector((state) => state.app.selectedCity);
  const units = useSelector((state) => state.weather.selectedCity);

  function closeDrawer() {
    dispatch(closeWeatherForecast());
  }

  return (
    <div className={`drawer ${drawerIsOpen ? 'open' : ''}`}>
      <div className="drawer-overlay" onClick={closeDrawer} />
      <div className="drawer-content">
        <button type="button" className="btn-close" onClick={closeDrawer}>
          <i className="bi bi-x-circle" />
        </button>

        {selectedCity ? (
          <WeatherForecast
            className="mt-5"
            lat={selectedCity.lat}
            lon={selectedCity.lon}
            name={selectedCity.name}
            units={units}
          />
        ) : (
          <div>There is no city selected</div>
        )}
      </div>
    </div>
  );
}
