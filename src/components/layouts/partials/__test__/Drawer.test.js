import { Drawer } from '../Drawer';
import { render, store } from '../../../../libs/test/test-utils';
import { act } from '@testing-library/react';
import { closeWeatherForecast, openWeatherForecast } from '../../../../redux/app/actions';
import MockAdapter from 'axios-mock-adapter';
import { http } from '../../../../libs/http/http';

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

describe('Test Drawer Component', () => {
  beforeAll(() => {
    mockHttp.onAny("/onecall").reply(200, mockResponseData);
  });

  it('should handle close button',  async () => {
    const { findByLabelText, findByRole } = render(<Drawer />);

    const closeButton = await findByLabelText(/close/i);
    expect(closeButton).toBeInTheDocument();

    act(() => {
      closeButton.click();
    })

    const drawer = await findByRole("dialog");
    expect(drawer).not.toHaveClass("open");
  });

  it('should show city forecast', async () => {
    const { findByText } = render(<Drawer />);

    act(() => {
      store.dispatch(closeWeatherForecast());
    });

    const noSelectedCityInfo = await findByText(/there is no city selected/i);
    expect(noSelectedCityInfo).toBeInTheDocument();

    act(() => {
      store.dispatch(openWeatherForecast(1, 2, 'Amsterdam'));
    });

    const weatherForecast = await findByText(/Amsterdam/i);
    expect(weatherForecast).toBeInTheDocument();
  });
});
