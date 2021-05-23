import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { initializeStore } from './redux/store';

const store = initializeStore();

test('renders app', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/dashboard/i)).toBeInTheDocument();
  expect(getByText(/about/i)).toBeInTheDocument();
});
