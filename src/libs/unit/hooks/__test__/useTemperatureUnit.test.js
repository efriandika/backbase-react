import * as ReactRedux from 'react-redux';
import { renderHook } from '@testing-library/react-hooks';
import { useTemperatureUnit } from '../useTemperatureUnit';

describe('Test Temperature Unit Hooks', () => {
  const mockUseSelector = jest.spyOn(ReactRedux, 'useSelector');

  it('should render temperature with its unit', () => {
    mockUseSelector.mockReturnValueOnce('metric');

    const { result, rerender } = renderHook(() => useTemperatureUnit());
    expect(result.current('27')).toEqual('27\u00b0 C');

    mockUseSelector.mockReturnValueOnce('imperial');
    rerender();

    expect(result.current('27')).toEqual('27\u00b0 F');
  })

  it('should render original value when units is not supported yet', () => {
    mockUseSelector.mockReturnValueOnce('xxx');
    const { result } = renderHook(() => useTemperatureUnit());
    expect(result.current('27')).toEqual('27');
  })
});
