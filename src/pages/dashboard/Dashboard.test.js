import Dashboard from './Dashboard';
import MockAdapter from 'axios-mock-adapter';
import { http } from '../../libs/http/http';
import { render, store, act, fireEvent } from '../../libs/test/test-utils';

const mockHttp = new MockAdapter(http);

const mockForecastResponseData = {
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
const mockCurrentResponseData = {
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

function renderComponentMockAPI(httpStatus = 200) {
  mockHttp.onAny("/onecall").reply(httpStatus, mockForecastResponseData);
  mockHttp.onAny('/weather').reply(200, mockCurrentResponseData);
  return render(<Dashboard />);
}

describe('Test Dashboard Page',  () => {
  afterEach(() => {
    mockHttp.resetHandlers();
  });

  it('should handle drawer when city get clicked', async () => {
    const { findAllByLabelText } = renderComponentMockAPI();

    const elements = await findAllByLabelText(`Amsterdam's weather`);

    // const citiesBeforeUpdated = store.getState().app.cities;

    act(() => {
      fireEvent.click(elements[0]);
    });

    expect(store.getState().app.drawer).toBe(true);
  });

  it('should handle new city', async () => {
    const citiesBeforeUpdated = store.getState().app.cities;
    const { findByLabelText } = renderComponentMockAPI();

    const button = await findByLabelText('Add New City Button');
    const input = await findByLabelText('Add New City');

    act(() => {
      fireEvent.change(input, { target: { value: 'Bali' } });
    });

    act(() => {
      fireEvent.click(button);
    });

    expect(store.getState().app.cities.length).toEqual(citiesBeforeUpdated.length + 1);
  });
});
