import PropTypes from 'prop-types';
import { Weather } from '../weather/Weather';
import styles from './WeatherList.module.scss';
import { useState } from 'react';

export function WeatherList({ className, cities, units, onCityClick, onNewCitySubmit }) {
  const [newCityName, setNewCityName] = useState('');

  function handleNewCitySubmit(e) {
    e.preventDefault();
    onNewCitySubmit(newCityName);
    setNewCityName('');
  }

  return (
    <div className={`row ${className}`}>
      {cities.map((city, index) => (
        <div key={`city-weather-${index}`} className="col-md-4 mb-4">
          <Weather cityName={city} units={units} onClick={(lon, lat, cityName) => onCityClick(lon, lat, cityName)} />
        </div>
      ))}

      <div key={`city-weather-new`} className="col-md-4 mb-4">
        <div className={styles.newCityForm}>
          <form onSubmit={handleNewCitySubmit}>
            <div className="mb-3">
              <label htmlFor="new-city-name" className="form-label">Add New City</label>
              <input
                type="text" className="form-control" id="new-city-name" placeholder="Eg: Paris"
                value={newCityName}
                onChange={(e) => setNewCityName(e.target.value)}
              />
            </div>

            <div className="text-end">
              <button type="submit" className="btn btn-primary" disabled={newCityName === ''}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

WeatherList.propTypes = {
  className: PropTypes.string,
  units: PropTypes.string,
  cities: PropTypes.array.isRequired,
  onCityClick: PropTypes.func,
  onCityAdd: PropTypes.func,
};

WeatherList.defaultProps = {
  className: '',
  units: 'metric',
  cities: [],
  onCityClick: () => {},
  onNewCitySubmit: () => {},
};
