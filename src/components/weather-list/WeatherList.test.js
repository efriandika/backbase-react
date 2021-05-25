import { render, waitFor } from '@testing-library/react';
import { initializeStore } from '../../redux/store';
import MockAdapter from 'axios-mock-adapter';
import { http } from '../../libs/http/http';
import { Provider } from 'react-redux';
import { WeatherList } from './WeatherList';
import { addCity } from '../../redux/app/actions';

const store = initializeStore();
const mockHttp = new MockAdapter(http);

const mockResponseData = {
  "coord": {
    "lon": 4.8897,
    "lat": 52.374
  },
  "weather": [
    {
      "id": 802,
      "main": "Clouds",
      "description": "scattered clouds",
      "icon": "03d"
    }
  ],
  "main": {
    "temp": 11.56,
    "pressure": 1016,
    "humidity": 85
  },
  "wind": {
    "speed": 3.58,
  },
  "dt": 1621953209,
  "sys": {
    "country": "NL",
  },
  "name": "Amsterdam"
};

describe('Weather List Component Test',  () => {
  beforeAll(() => {
    mockHttp.onAny("/weather").reply(200, mockResponseData);
  });

  it('should render cities weather', async () => {
    const cities = store.getState().app.cities;

    const { queryAllByText } = render(
      <Provider store={store}>
        <WeatherList cities={cities} onNewCitySubmit={(newCityName) => store.dispatch(addCity(newCityName))} />
      </Provider>
    );

    await waitFor(() => {
      const elements = queryAllByText(/amsterdam/i);
      expect(elements.length).toBe(cities.length);
    });
  });

  it('should render new city weather when it got added from the add form', async () => {
    const cities = store.getState().app.cities;

    const { queryAllByText } = render(
      <Provider store={store}>
        <WeatherList cities={cities} onNewCitySubmit={(newCityName) => store.dispatch(addCity(newCityName))} />
      </Provider>
    );

    await waitFor(() => {
      const elements = queryAllByText(/amsterdam/i);
      expect(elements.length).toBe(cities.length);
    });
  });
});
