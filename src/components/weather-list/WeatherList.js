import PropTypes from 'prop-types';
import { Weather } from '../weather/Weather';

export function WeatherList({ classname, cities, units, onCityClick }) {
  return (
    <div className={`row ${classname}`}>
      {cities.map((city, index) => (
        <div key={`city-weather-${index}`} className="col-md-4 mb-4">
          <Weather cityName={city} units={units} onClick={onCityClick} />
        </div>
      ))}
    </div>
  );
}

WeatherList.propTypes = {
  className: PropTypes.string,
  units: PropTypes.string,
  cities: PropTypes.array.isRequired,
  onCityClick: PropTypes.func,
};

WeatherList.defaultProps = {
  className: '',
  units: 'standard',
  cities: [],
  onCityClick: () => {},
};
