import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Weather } from '../weather/Weather';

const DEFAULT_CITY = [
  'Amsterdam',
  'Dublin,IE',
  'Edinburgh',
  'Manchester',
  'London',
];

export function WeatherList() {
  const [cities] = useState(DEFAULT_CITY);

  return (
    <div className="row">
      {cities.map((city, index) => (
        <div key={`city-weather-${index}`} className="col-md-4 mb-4">
          <Weather cityName={city} />
        </div>
      ))}
    </div>
  );
}

WeatherList.propTypes = {

};

WeatherList.defaultProps = {

};
