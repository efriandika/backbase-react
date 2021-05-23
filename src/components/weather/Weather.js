import PropTypes from 'prop-types';
import styles from './Weather.module.scss';
import { useEffect } from 'react';
import { useHttp } from '../../libs/http/hooks/useHttp';

export function Weather({ className, cityName }) {
  const [{ data, loading }, fetchData, cancelRequest] = useHttp({}, { manual: true });

  useEffect(() => {
    fetchWeatherData(cityName);
    return () => cancelRequest();
  }, [cityName]);

  async function fetchWeatherData(q) {
    try {
      fetchData({
        url: '/weather',
        params: {
          q
        },
      });
    } catch (e) {
      alert('Failed to get Weather Data from the server!');
    }
  }

  function renderSkeleton() {
    return (
      <div>Loading...</div>
    );
  }

  function renderData() {
    return (
      <>
        <div className={styles.temperature}>27 &deg; C</div>
        <div className={styles.city}>{data.name}</div>
        <div className={styles.country}>{data.sys.country}</div>
      </>
    );
  }

  return (
    <div className={`${className} ${styles.container}`}>
      {(data && !loading) ? renderData() : renderSkeleton()}
    </div>
  );
}

Weather.propTypes = {
  className: PropTypes.string,
  cityName: PropTypes.string.isRequired,
};

Weather.defaultProps = {
  className: '',
};
