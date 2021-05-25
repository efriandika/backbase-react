import { render, waitFor } from '@testing-library/react';
import { Weather } from './Weather';
import { initializeStore } from '../../redux/store';
import { Provider } from 'react-redux';
import MockAdapter from 'axios-mock-adapter';
import { http } from '../../libs/http/http';

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

function renderComponentMockAPI(httpStatus = 200, responseData = mockResponseData) {
  mockHttp.onAny("/weather").reply(httpStatus, responseData);

  return render(
    <Provider store={store}>
      <Weather cityName="Amsterdam" />
    </Provider>
  );
}

describe('Test Weather Component', () => {
  afterEach(() => {
    mockHttp.resetHandlers();
  });

  it("should render loading skeleton while requesting data to the server", async () => {
    const { findAllByTestId } = renderComponentMockAPI()

    const skeletonElements = await findAllByTestId('skeleton-element');
    expect(skeletonElements.length).toBeGreaterThanOrEqual(1);
  });

  it("should show the weather info from the API", async () => {
    const { queryByText } = renderComponentMockAPI()

    await waitFor(() => {
      const element = queryByText(/amsterdam/i);
      expect(element).toBeInTheDocument();
    });
  });

  it("should render error message when city is not found", async () => {
    const { queryByText } = renderComponentMockAPI(404, null)

    await waitFor(() => {
      const errorElement = queryByText(/is not found/i);
      expect(errorElement).toBeInTheDocument();
    });
  });
});
