import { applyMiddleware, combineReducers, createStore } from 'redux';
import { appReducer } from './app/reducers';
import { weatherReducer } from './weather/reducers';

let store;

/* ------------- Assemble The Reducers ------------- */
/* eslint-disable global-require */
const rootReducers = combineReducers({
  app: appReducer,
  weather: weatherReducer,
});
/* eslint-enable global-require */

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line global-require
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const initStore = (preloadedState = {}) => {
  /* ------------- Assemble Middleware ------------- */
  store = createStore(
    rootReducers,
    preloadedState,
    bindMiddleware([]),
  );

  return store;
};

export const initializeStore = (preloadedState) => {
  let currentStore = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    currentStore = initStore({
      ...store.getState(),
      ...preloadedState,
    });

    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') {
    return currentStore;
  }

  // Create the store once only in the client
  if (!store) {
    store = currentStore;
  }

  return currentStore;
};
