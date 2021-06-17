import axios from 'axios';
import { CONSTANTS } from '../constants';

export const APIRequest = async (url, type, data = {}) => {
  const API_URL = `${CONSTANTS.BASE_URL}${url}`;

  let service;
  const config = {
    headers: { 'Content-type': 'Application/json' },
  };

  switch (type.toLowerCase()) {
    case 'get':
      service = axios.get(API_URL, config);
      break;
    case 'post':
      service = axios.post(API_URL, data, config);
      break;
    case 'put':
      service = axios.put(API_URL, data, config);
      break;

    default:
      break;
  }

  try {
    await service;
    return service;
  } catch (error) {
    return error;
  }
};
