import * as ReactRedux from 'react-redux';
import { renderHook } from '@testing-library/react-hooks';
import { useSpeedUnit } from '../useSpeedUnit';

describe('Test Speed Unit Hooks', () => {
  const mockUseSelector = jest.spyOn(ReactRedux, 'useSelector');

  it('should render speed with its unit', () => {
    mockUseSelector.mockReturnValueOnce('metric');

    const { result, rerender } = renderHook(() => useSpeedUnit());
    expect(result.current('27')).toEqual('27 meter/s');

    mockUseSelector.mockReturnValueOnce('imperial');
    rerender();

    expect(result.current('27')).toEqual('27 miles/h');
  })

  it('should render original value when units is not supported yet', () => {
    mockUseSelector.mockReturnValueOnce('xxx');
    const { result } = renderHook(() => useSpeedUnit());
    expect(result.current('27')).toEqual('27');
  })
});
