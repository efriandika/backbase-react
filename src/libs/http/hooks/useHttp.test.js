import MockAdapter from 'axios-mock-adapter';
import { renderHook } from '@testing-library/react-hooks';
import { useHttp } from './useHttp';
import { http } from '../http';

const mockHttp = new MockAdapter(http);

describe('Test HTTP Hooks', () => {
  const data = {
    name: 'efriandika',
  };

  beforeAll(() => {
    mockHttp.onAny("/").reply(200, data);
    mockHttp.onAny("/network-error-test").networkError();
  });

  it('should set loading to true and error to null before the request resolves', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useHttp({ url: '/' }, { useCache: false }));

    expect(result.current[0].loading).toBe(true);
    expect(result.current[0].error).toBe(null);

    await waitForNextUpdate();
  });

  it('should set loading to false when request resolves', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useHttp({ url: '/' }, { useCache: false }));

    await waitForNextUpdate();

    expect(result.current[0].loading).toBe(false);
    expect(result.current[0].error).toBe(null);
    expect(result.current[0].data).toEqual(data);
  });

  it('should handle exception when network error occurred', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useHttp({ url: '/network-error-test' }, { useCache: false }));

    expect(result.current[0].loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current[0].loading).toBe(false);
    expect(result.current[0].error).not.toBe(null);
  });
});
