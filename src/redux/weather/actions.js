import { weatherTypes } from './types';

export const setUnits = (units) => ({ type: weatherTypes.SET_UNITS, payload: { units } });
