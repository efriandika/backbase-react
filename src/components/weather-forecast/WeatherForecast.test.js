import { WeatherForecast } from './WeatherForecast';
import MockAdapter from 'axios-mock-adapter';
import { http } from '../../libs/http/http';
import { render, waitFor } from '../../libs/test/test-utils';

const mockHttp = new MockAdapter(http);

const mockResponseData = {
  "lat": 55.9521,
  "lon": -3.1965,
  "timezone": "Europe/London",
  "timezone_offset": 3600,
  "current": {
    "dt": 1621990766,
    "sunrise": 1622000540,
    "sunset": 1622061461,
    "temp": 7.64,
    "feels_like": 7.64,
    "pressure": 1015,
    "humidity": 91,
    "dew_point": 6.27,
    "uvi": 0,
    "clouds": 90,
    "visibility": 10000,
    "wind_speed": 0.89,
    "wind_deg": 0,
    "wind_gust": 4.02,
    "weather": [
      {
        "id": 804,
        "main": "Clouds",
        "description": "overcast clouds",
        "icon": "04n"
      }
    ]
  },
  "hourly": [
    {
      "dt": 1621987200,
      "temp": 7.46,
      "feels_like": 6.18,
      "pressure": 1015,
      "humidity": 91,
      "dew_point": 6.09,
      "uvi": 0,
      "clouds": 88,
      "visibility": 10000,
      "wind_speed": 2.06,
      "wind_deg": 302,
      "wind_gust": 3.25,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1621990800,
      "temp": 7.64,
      "feels_like": 5.89,
      "pressure": 1015,
      "humidity": 91,
      "dew_point": 6.27,
      "uvi": 0,
      "clouds": 90,
      "visibility": 10000,
      "wind_speed": 2.69,
      "wind_deg": 312,
      "wind_gust": 6.58,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.35
    }
  ]
};

function renderComponentMockAPI(lon, lat, cityName, httpStatus = 200, responseData = mockResponseData) {
  mockHttp.onAny("/onecall").reply(httpStatus, responseData);

  return render(<WeatherForecast lon={lon} lat={lat} name={cityName} />);
}

describe('Test Weather Forecasting Component', () => {
  afterEach(() => {
    mockHttp.resetHandlers();
  });

  it("should render loading skeleton while requesting data to the server", async () => {
    const { findAllByTestId } = renderComponentMockAPI(1, 2, 'Amsterdam');

    const skeletonElements = await findAllByTestId('skeleton-element');
    expect(skeletonElements.length).toBeGreaterThanOrEqual(1);
  });

  it("should show the weather forecast from the API", async () => {
    const { findByText } = renderComponentMockAPI(1, 2, 'Amsterdam');

    const element = await findByText(/Forecast/i);
    expect(element).toBeInTheDocument();
  });

  it("should not render weather icon if icon data is available", async () => {
    const { findByTestId } = renderComponentMockAPI(1, 2, 'Amsterdam', 200);

    const element = await findByTestId('weather-icon');
    expect(element).toBeInTheDocument();
  });

  it("should not render weather icon if icon data is unavailable", async () => {
    const { queryByTestId } = renderComponentMockAPI(1, 2, 'Amsterdam', 200, { ...mockResponseData, current: { ...mockResponseData.current, weather: [] } });

    await waitFor(() => {
      const element = queryByTestId('weather-icon');
      expect(element).not.toBeInTheDocument();
    });
  });
});
