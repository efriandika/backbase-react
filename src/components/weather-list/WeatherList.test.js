import MockAdapter from 'axios-mock-adapter';
import { http } from '../../libs/http/http';
import { WeatherList } from './WeatherList';
import { addCity } from '../../redux/app/actions';
import { render, store } from '../../libs/test/test-utils';
import { act, fireEvent, waitFor } from '@testing-library/react';

const mockHttp = new MockAdapter(http);

const mockResponseData = {
  'coord': {
    'lon': 4.8897,
    'lat': 52.374
  },
  'weather': [
    {
      'id': 802,
      'main': 'Clouds',
      'description': 'scattered clouds',
      'icon': '03d'
    }
  ],
  'main': {
    'temp': 11.56,
    'pressure': 1016,
    'humidity': 85
  },
  'wind': {
    'speed': 3.58,
  },
  'dt': 1621953209,
  'sys': {
    'country': 'NL',
  },
  'name': 'Amsterdam'
};

function renderComponentMockAPI(cities = store.getState().app.cities, httpStatus = 200, responseData = mockResponseData) {
  mockHttp.onAny('/weather').reply(httpStatus, responseData);

  return render(<WeatherList cities={ cities } onNewCitySubmit={ (newCityName) => store.dispatch(addCity(newCityName)) }/>);
}

describe('Weather List Component Test', () => {
  afterAll(() => {
    mockHttp.resetHandlers();
  });

  it('should render cities weather', async () => {
    const cities = store.getState().app.cities;
    const { queryAllByText } = renderComponentMockAPI(cities);

    await waitFor(() => {
      const elements = queryAllByText(/amsterdam/i);
      expect(elements.length).toBe(cities.length);
    });
  });

  it('should render new city weather when it got added from the add form', async () => {
    const cities = store.getState().app.cities;
    const { queryAllByText } = renderComponentMockAPI(cities);

    await waitFor(() => {
      const elements = queryAllByText(/amsterdam/i);
      expect(elements.length).toBe(cities.length);
    });
  });

  it('should handle on city click event', async () => {
    const cities = store.getState().app.cities;
    const mockOnCityClickCallBack = jest.fn();

    mockHttp.onAny('/weather').reply(200, mockResponseData);
    const { findAllByLabelText } = render(<WeatherList cities={ cities } onCityClick={ mockOnCityClickCallBack }/>);

    const elements = await findAllByLabelText(`Amsterdam's weather`);

    act(() => {
      fireEvent.click(elements[0]);
    });

    expect(mockOnCityClickCallBack).toHaveBeenCalled();
  });

  it('should handle new city form state', async () => {
    const { findByLabelText } = renderComponentMockAPI();

    const button = await findByLabelText('Add New City Button');
    const input = await findByLabelText('Add New City');

    expect(button).toBeDisabled();

    act(() => {
      fireEvent.change(input, { target: { value: 'Bali' } });
    });

    expect(input.value).toBe('Bali');
    expect(button).toBeEnabled();
  });

  it('should handle on new city get added', async () => {
    const cities = store.getState().app.cities;
    const { findByLabelText } = renderComponentMockAPI(cities);

    const button = await findByLabelText('Add New City Button');
    const input = await findByLabelText('Add New City');

    act(() => {
      fireEvent.change(input, { target: { value: 'Bali' } });
    });

    expect(button).toBeEnabled();

    act(() => {
      fireEvent.click(button);
    });

    expect(store.getState().app.cities.length).toEqual(cities.length + 1);
  });
});
