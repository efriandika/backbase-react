import PropTypes from 'prop-types';
import styles from './Weather.module.scss';
import { useEffect } from 'react';
import { useHttp } from '../../libs/http/hooks/useHttp';

export function Weather({ className, units, cityName, onClick }) {
  const [{ data, loading }, fetchData, cancelRequest] = useHttp({}, { manual: true });

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    fetchWeatherData(cityName);
    return () => cancelRequest();
  }, [cityName]);
  /* eslint-enabled react-hooks/exhaustive-deps */

  async function fetchWeatherData(q) {
    try {
      fetchData({
        url: '/weather',
        params: {
          q,
          units
        },
      });
    } catch (e) {
      alert('Failed to get Weather Data from the server!');
    }
  }

  function renderSkeleton() {
    return (
      <div className={`${className} ${styles.container}`}>
        Loading...
      </div>
    );
  }

  function renderData() {
    return (
      <div className={`${className} ${styles.container} cursor-pointer`} onClick={onClick}>
        <div className={styles.temperature}>27 &deg; C</div>
        <div className={styles.city}>{data.name}</div>
        <div className={styles.country}>{data.sys.country}</div>
      </div>
    );
  }

  if (data && !loading) {
    return renderData();
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
  units: 'standard',
  onClick: () => {},
};
