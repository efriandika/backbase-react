import { makeUseAxios } from 'axios-hooks';
import { http } from '../http';

const useHttp = makeUseAxios({
  axios: http
});

export { useHttp };
