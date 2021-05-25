import { weatherTypes } from '../types';
import { enableImperialUnits, enableMetricUnits, setUnits } from '../actions';

describe('Test Weather Redux Actions Creator', () => {
  it('should create an action to set units', () => {
    const units = 'metric';
    const expectedAction = {
      type: weatherTypes.SET_UNITS,
      payload: { units }
    }

    expect(setUnits(units)).toEqual(expectedAction);
  });

  it('should create an action to set unit equals to imperial', () => {
    const expectedAction = {
      type: weatherTypes.SET_UNITS,
      payload: { units: 'imperial' }
    }

    expect(enableImperialUnits()).toEqual(expectedAction);
  });

  it('should create an action to set unit equals to metric', () => {
    const expectedAction = {
      type: weatherTypes.SET_UNITS,
      payload: { units: 'metric' }
    }

    expect(enableMetricUnits()).toEqual(expectedAction);
  });
});
