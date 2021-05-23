import { appTypes } from './types';
import { updateObject } from '../utilities';

export const INITIAL_STATE = {
  drawer: false,
};

export const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case appTypes.OPEN_DRAWER:
      return updateObject(state, { drawer: true });
    case appTypes.CLOSE_DRAWER:
      return updateObject(state, { drawer: false });
    case appTypes.TOGGLE_DRAWER:
      return updateObject(state, { drawer: !state.drawer });

    default:
      return state;
  }
};
