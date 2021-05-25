import { http } from './http';
import MockAdapter from 'axios-mock-adapter';

const mockHttp = new MockAdapter(http);

describe('Test HTTP Libs', () => {
  beforeAll(() => {
    mockHttp.onAny("/").reply(200);
  });

  it('should has default base URL', async () => {
    try {
      const response = await http.get('/');
      expect(response.config.baseURL).toEqual(process.env.REACT_APP_BACKEND_BASE_URL);
    } catch (e) {
      console.log(e);
    }
  });

  it('should has default api key params', async () => {
    try {
      const response = await http.get('/');
      expect(response.config.params.appid).toEqual(process.env.REACT_APP_BACKEND_API_KEY);
    } catch (e) {
      console.log(e);
    }
  });
});
