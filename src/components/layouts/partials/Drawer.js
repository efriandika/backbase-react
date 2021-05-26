import { useDispatch, useSelector } from 'react-redux';
import { closeWeatherForecast } from '../../../redux/app/actions';
import { WeatherForecast } from '../../weather-forecast/WeatherForecast';

/**
 * Drawer dialog box
 * @author efriandika
 */
export function Drawer() {
  const dispatch = useDispatch();
  const drawerIsOpen = useSelector((state) => state.app.drawer);
  const selectedCity = useSelector((state) => state.app.selectedCity);
  const units = useSelector((state) => state.weather.selectedCity);

  function closeDrawer() {
    dispatch(closeWeatherForecast());
  }

  return (
    <div className={`drawer ${drawerIsOpen ? 'open' : ''}`} role="dialog" aria-label="Weather Forecasting">
      <div className="drawer-overlay" onClick={closeDrawer} />
      <div className="drawer-content">
        <button type="button" className="btn-close" onClick={closeDrawer} aria-label="close" data-testid="hehe">
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
