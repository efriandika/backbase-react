import { Weather } from './Weather';
import MockAdapter from 'axios-mock-adapter';
import { http } from '../../libs/http/http';
import { render, waitFor } from '../../libs/test/test-utils';
import { act, fireEvent } from '@testing-library/react';

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

  return render(<Weather cityName="Amsterdam" />);
}

describe('Test Weather Component', () => {
  afterEach(() => {
    mockHttp.resetHandlers();
  });

  it("should render loading skeleton while requesting data to the server", async () => {
    const { findAllByTestId } = renderComponentMockAPI();

    const skeletonElements = await findAllByTestId('skeleton-element');
    expect(skeletonElements.length).toBeGreaterThanOrEqual(1);
  });

  it("should show the weather info from the API", async () => {
    const { queryByText } = renderComponentMockAPI();

    await waitFor(() => {
      const element = queryByText(/amsterdam/i);
      expect(element).toBeInTheDocument();
    });
  });

  it("should render error message when city is not found", async () => {
    const { queryByText } = renderComponentMockAPI(404, null);

    await waitFor(() => {
      const errorElement = queryByText(/is not found/i);
      expect(errorElement).toBeInTheDocument();
    });
  });

  it("should render error message when api is error", async () => {
    const { queryByText } = renderComponentMockAPI(500, null);

    await waitFor(() => {
      const errorElement = queryByText(/Error/i);
      expect(errorElement).toBeInTheDocument();
    });
  });

  it("should not render weather icon if icon data is unavailable", async () => {
    const { queryByTestId } = renderComponentMockAPI(200, { ...mockResponseData, weather: [] });

    await waitFor(() => {
      const element = queryByTestId('weather-icon');
      expect(element).not.toBeInTheDocument();
    });
  });

  it("should handle on click event", async () => {
    const mockOnClickCallBack = jest.fn();

    mockHttp.onAny("/weather").reply(200, mockResponseData);
    const { findByLabelText } = render(<Weather cityName="Amsterdam" onClick={mockOnClickCallBack} />);

    const element = await findByLabelText(`Amsterdam's weather`);

    act(() => {
      fireEvent.click(element);
    });

    expect(mockOnClickCallBack).toHaveBeenCalled();
  });
});
