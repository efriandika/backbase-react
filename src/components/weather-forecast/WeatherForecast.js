import PropTypes from 'prop-types';
import { useHttp } from '../../libs/http/hooks/useHttp';
import { useEffect } from 'react';

export function WeatherForecast({ className, units, lon, lat, name }) {
  const [{ data, loading }, fetchData, cancelRequest] = useHttp({}, { manual: true });

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    fetchWeatherData(lat, lon);
    return () => cancelRequest();
  }, [lat, lon]);
  /* eslint-enabled react-hooks/exhaustive-deps */

  async function fetchWeatherData(lat, lon) {
    try {
      fetchData({
        url: '/onecall',
        params: {
          lat,
          lon,
          units,
          exclude: 'minutely,daily,alerts',
        },
      });
    } catch (e) {
      alert('Failed to get Skeleton Data from the server!');
    }
  }

  return (
    <div>{name}</div>
  );
}

WeatherForecast.propTypes = {
  className: PropTypes.string,
  units: PropTypes.string,
  lon: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

WeatherForecast.defaultProps = {
  className: '',
  units: 'metric',
};
