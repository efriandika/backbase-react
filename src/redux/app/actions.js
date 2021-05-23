import { appTypes } from './types';

export const addCity = (city) => ({
  type: appTypes.ADD_CITY,
  payload: { city }
});

export const openWeatherForecast = (lon, lat, name) => ({
  type: appTypes.OPEN_WEATHER_FORECAST,
  payload: { lon, lat, name }
});

export const closeWeatherForecast = () => ({ type: appTypes.CLOSE_WEATHER_FORECAST });
