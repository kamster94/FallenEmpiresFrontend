import axios, { AxiosInstance } from 'axios';

const ApiClient: AxiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL,
  headers: {
    'Content-type': 'application/json'
  }
});

export default ApiClient;
