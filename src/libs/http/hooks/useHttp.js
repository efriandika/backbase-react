import { makeUseAxios } from 'axios-hooks'
import { http } from '../http';

export const useHttp = makeUseAxios({
  axios: http
});
