import { appTypes } from './types';
import { updateObject } from '../utilities';

export const INITIAL_STATE = {
  drawer: false,
  selectedCity: null,
  cities: [
    'Amsterdam',
    'Dublin,IE',
    'Edinburgh',
    'Manchester',
    'London',
  ],
};

export const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case appTypes.ADD_CITY:
      return updateObject(state, { drawer: false, cities: [ ...state.cities, action.payload.city ] });

    case appTypes.OPEN_WEATHER_FORECAST:
      return updateObject(state, {
        drawer: true,
        selectedCity: {
          lon: action.payload.lon,
          lat: action.payload.lat,
          name: action.payload.name,
        }
      });

    case appTypes.CLOSE_WEATHER_FORECAST:
      return updateObject(state, { drawer: false, selectedCity: null });

    default:
      return state;
  }
};
