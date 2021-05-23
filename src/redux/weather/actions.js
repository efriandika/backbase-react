import { weatherTypes } from './types';

export const setUnits = (units) => ({ type: weatherTypes.SET_UNITS, payload: { units } });
export const enableImperialUnits = () => ({ type: weatherTypes.SET_UNITS, payload: { units: 'imperial' } });
export const enableMetricUnits = () => ({ type: weatherTypes.SET_UNITS, payload: { units: 'metric' } });
