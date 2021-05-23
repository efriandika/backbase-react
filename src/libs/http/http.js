import axios from 'axios';

export const http = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
  params: {
    appid: process.env.REACT_APP_BACKEND_API_KEY,
  }
});
