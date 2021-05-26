import { render, store } from '../../../../libs/test/test-utils';
import { Navbar } from '../Navbar';
import { act, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { enableMetricUnits } from '../../../../redux/weather/actions';

describe('Test Navbar Component', () => {
  it('should handle unit switcher', async () => {
    const { findByLabelText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const switcher = await findByLabelText('Metric Units Switcher');

    act(() => {
      store.dispatch(enableMetricUnits());
    });

    expect(switcher).toBeChecked();

    act(() => {
      fireEvent.click(switcher);
    });

    expect(store.getState().weather.units).toEqual('imperial');

    act(() => {
      fireEvent.click(switcher);
    });

    expect(store.getState().weather.units).toEqual('metric');
  });
});
