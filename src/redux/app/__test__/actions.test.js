import { appTypes } from '../types';
import { addCity, closeWeatherForecast, openWeatherForecast } from '../actions';

describe('Test App Redux Actions Creator', () => {
  it('should create an action to add city', () => {
    const cityName = 'Amsterdam';
    const expectedAction = {
      type: appTypes.ADD_CITY,
      payload: { city: cityName }
    }

    expect(addCity(cityName)).toEqual(expectedAction);
  });

  it('should create an action to open weather forecast drawer', () => {
    const cityName = 'Amsterdam';
    const expectedAction = {
      type: appTypes.OPEN_WEATHER_FORECAST,
      payload: {
        lon: 1,
        lat: 2,
        name: cityName
      }
    }

    expect(openWeatherForecast(1, 2, cityName)).toEqual(expectedAction);
  });

  it('should create an action to close weather forecast drawer', () => {
    const expectedAction = {
      type: appTypes.CLOSE_WEATHER_FORECAST
    }

    expect(closeWeatherForecast()).toEqual(expectedAction);
  });
});
