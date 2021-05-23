import { WeatherList } from '../../components/weather-list/WeatherList';
import { useDispatch, useSelector } from 'react-redux';
import { addCity, openWeatherForecast } from '../../redux/app/actions';

export default function Dashboard() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.app.cities)
  const units = useSelector((state) => state.weather.units)

  return (
    <div className="container">
      <WeatherList
        cities={cities}
        units={units}
        onCityClick={(lon, lat, cityName) => dispatch(openWeatherForecast(lon, lat, cityName))}
        onNewCitySubmit={(cityName) => dispatch(addCity(cityName))}
      />
    </div>
  );
}
