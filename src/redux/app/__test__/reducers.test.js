import { appReducer, INITIAL_STATE } from '../reducers';
import { addCity, closeWeatherForecast, openWeatherForecast } from '../actions';

describe('Test App Redux Actions Creator', () => {
  it('should return the initial state', () => {
    expect(appReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle ADD_CITY', () => {
    expect(appReducer(undefined, addCity('Jakarta'))).toEqual({
      drawer: false,
      selectedCity: null,
      cities: [
        'Amsterdam',
        'Dublin,IE',
        'Edinburgh',
        'Manchester',
        'London',
        'Jakarta'
      ],
    });
  });

  it('should handle OPEN_WEATHER_FORECAST', () => {
    expect(appReducer(undefined, openWeatherForecast(1, 2, 'Amsterdam'))).toEqual({
      drawer: true,
      selectedCity: {
        lon: 1,
        lat: 2,
        name: 'Amsterdam'
      },
      cities: [
        'Amsterdam',
        'Dublin,IE',
        'Edinburgh',
        'Manchester',
        'London'
      ],
    });
  });

  it('should handle CLOSE_WEATHER_FORECAST', () => {
    expect(appReducer(undefined, closeWeatherForecast(1, 2, 'Amsterdam'))).toEqual({
      drawer: false,
      selectedCity: null,
      cities: [
        'Amsterdam',
        'Dublin,IE',
        'Edinburgh',
        'Manchester',
        'London'
      ],
    });
  });
});
