import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHttp } from '../../libs/http/hooks/useHttp';
import styles from './WeatherForecast.module.scss';
import { Skeleton } from '../skeleton/Skeleton';
import { useTemperatureUnit } from '../../libs/unit/hooks/useTemperatureUnit';
import { useSpeedUnit } from '../../libs/unit/hooks/useSpeedUnit';

export function WeatherForecast({ className, units, lon, lat, name }) {
  const [{ data, loading, error }, fetchData, cancelRequest] = useHttp({}, { manual: true });
  const textTemperatureUnit = useTemperatureUnit();
  const textSpeedUnit = useSpeedUnit();

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

  function unixTimestampToDateTime(timestamp) {
    return new Date(timestamp * 1000).toLocaleString();
  }

  function unixTimestampToTime(timestamp) {
    return new Date(timestamp * 1000).toLocaleTimeString();
  }

  function renderWeatherIcon() {
    if (data.current.weather.length > 0) {
      return (<img className={styles.weatherIcon} src={`https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`} alt={data.current.weather[0].main} />);
    } else {
      return null;
    }
  }

  function renderSkeleton() {
    return (
      <div className={ `${className} ${styles.container}` }>
        <div className={styles.cityName}><Skeleton width="50%" height="50px" /></div>
        <div className="line-height-condenced text-muted text-tiny">
          <div><Skeleton width="30%" height="20px" /></div>
          <div className="font-weight-semibold"><Skeleton width="60%" height="20px" /></div>
        </div>
      </div>
    );
  }

  function renderData() {
    return (
      <div className={ `${className} ${styles.container}` }>
        {renderWeatherIcon()}

        <div className={styles.cityName}>{name}</div>
        <div className="line-height-condenced text-muted text-tiny">
          <div>Updated at:</div>
          <div className="font-weight-semibold">{unixTimestampToDateTime(data.current.dt)}</div>
        </div>

        <div className="mt-4 text-tiny">
          <div className="font-weight-semibold">Forecast (Next 5 Hours)</div>
          <table className="table">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Temp</th>
              <th scope="col">Feels Like</th>
              <th scope="col">Wind Speed</th>
            </tr>
            </thead>
            <tbody>
            {data.hourly.slice(1, 6).map((item, index) => (
              <tr key={`forecast-table-${index}`}>
                <td>{unixTimestampToTime(item.dt)}</td>
                <td>{textTemperatureUnit(item.temp)}</td>
                <td>{textTemperatureUnit(item.feels_like)}</td>
                <td>{textSpeedUnit(item.wind_speed)}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  function renderErrorResponse() {
    if (error) {
      return (
        <div className={ `${className} ${styles.container} text-danger` }>
          Data cannot be loaded from the server.<br/>
          { (error.response.status === 404) ? (
            <>
              <strong>{ name } (lon: { lon } | lat: { lat })</strong> is not found
            </>
          ) : (
            <>
              <strong>Error:</strong> { error.message }
            </>
          ) }
        </div>
      );
    } else {
      return null;
    }
  }

  if (data && !loading && error == null) {
    return renderData();
  } else if (error != null) {
    return renderErrorResponse();
  } else {
    return renderSkeleton();
  }
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
