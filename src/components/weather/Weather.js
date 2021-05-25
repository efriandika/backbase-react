import PropTypes from 'prop-types';
import styles from './Weather.module.scss';
import { useEffect } from 'react';
import { useHttp } from '../../libs/http/hooks/useHttp';
import { useTemperatureUnit } from '../../libs/unit/hooks/useTemperatureUnit';
import { useSpeedUnit } from '../../libs/unit/hooks/useSpeedUnit';
import { Skeleton } from '../skeleton/Skeleton';

export function Weather({ className, units, cityName, onClick }) {
  const [{ data, loading, error }, fetchData, cancelRequest] = useHttp({}, { manual: true });
  const textTemperatureUnit = useTemperatureUnit();
  const textSpeedUnit = useSpeedUnit();

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    fetchWeatherData(cityName, units);
    return () => cancelRequest();
  }, [cityName, units]);
  /* eslint-enabled react-hooks/exhaustive-deps */

  async function fetchWeatherData(q, units) {
    try {
      await fetchData({
        url: '/weather',
        params: {
          q,
          units
        },
      });
    } catch (e) {
      // console.error('Failed to get weather data from the server!');
    }
  }

  function renderWeatherIcon() {
    if (data.weather.length > 0) {
      return (<img className={styles.weatherIcon} src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={data.weather[0].main} />);
    } else {
      return null;
    }
  }

  function renderSkeleton() {
    return (
      <div className={`${className} ${styles.container}`}>
        <div className={styles.temperature}><Skeleton width="40%" height="46px" className="mb-2" /></div>

        <div className="mb-3 line-height-condenced">
          <div className={styles.city}><Skeleton width="45%" /></div>
          <div className={styles.country}><Skeleton width="30%" /></div>
        </div>

        <div className="d-flex justify-content-between">
          <div title="Humidity">
            <Skeleton width="55px" />
          </div>
          <div title="Wind Speed">
            <Skeleton width="70px" />
          </div>
        </div>
      </div>
    );
  }

  function renderData() {
    return (
      <div className={`${className} ${styles.container} cursor-pointer`} onClick={() => onClick(data.coord.lon, data.coord.lat, data.name)}>
        {renderWeatherIcon()}

        <div className={styles.temperature}>{textTemperatureUnit(data.main.temp)}</div>
        <div className="mb-3 line-height-condenced">
          <div className={styles.city}>{data.name}</div>
          <div className={styles.country}>{data.sys.country}</div>
        </div>

        <div className="d-flex justify-content-between">
          <div title="Humidity">
            <i className="bi bi-droplet" role="img" aria-label="Humidity" /> {data.main.humidity}%
          </div>
          <div title="Wind Speed">
            <i className="bi bi-wind" role="img" aria-label="Wind Speed" /> {textSpeedUnit(data.wind.speed)}
          </div>
        </div>
      </div>
    );
  }

  function renderErrorResponse() {
    if (error) {
      return (
        <div className={`${className} ${styles.container} text-danger`}>
          Data cannot be loaded from the server.<br />
          {(error.response.status === 404) ? (
            <>
              <strong>{cityName}</strong> is not found
            </>
          ) : (
            <>
              <strong>Error:</strong> {error.message}
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

Weather.propTypes = {
  className: PropTypes.string,
  units: PropTypes.string,
  cityName: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Weather.defaultProps = {
  className: '',
  units: 'metric',
  onClick: () => {},
};
