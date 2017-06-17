import axios from 'axios';
import config from './config';

const api = axios.create({
  baseURL: config.apiUrl,
  timeout: 10000,
});

export const registerUser = name => api.post('users', {
  name,
});

export const updateLocation = (id, location) => api.put('locations/me', {
  id,
  location,
});

export default {
  registerUser,
  updateLocation,
};
