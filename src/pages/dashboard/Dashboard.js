import { WeatherList } from '../../components/weather-list/WeatherList';
import { useDispatch, useSelector } from 'react-redux';
import { openDrawer } from '../../redux/app/actions';

export default function Dashboard() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.weather.cities)
  const units = useSelector((state) => state.weather.units)

  function openWeatherForecast() {
    dispatch(openDrawer());
  }

  return (
    <div className="container">
      <WeatherList cities={cities} units={units} onCityClick={() => openWeatherForecast()} />
    </div>
  );
}
