import { weatherReducer, INITIAL_STATE } from '../reducers';
import { setUnits } from '../actions';

describe('Test App Redux Actions Creator', () => {
  it('should return the initial state', () => {
    expect(weatherReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('should handle ADD_CITY', () => {
    expect(weatherReducer(undefined, setUnits('metric'))).toEqual({
      units: 'metric',
    });
  });
});
