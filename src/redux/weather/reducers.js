import { weatherTypes } from './types';
import { updateObject } from '../utilities';

export const INITIAL_STATE = {
  units: 'standard',
};

export const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case weatherTypes.SET_UNITS:
      return updateObject(state, { units: action.payload.units });

    default:
      return state;
  }
};