import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {API_URL} from '../config/secrets';

/**
 * Request Wrapper with default success/error actions
 */
const request = async (options, baseURL = API_URL) => {
  const token = await AsyncStorage.getItem('@auth/token');

  const client = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const onSuccess = response => {
    return response.data;
  };

  const onError = error => {
    // console.debug('Request Failed:', error.config);

    if (error.response) {
      // Request was made but server responded with something
      // other than 2xx
      // console.debug('Status:', error.response.status);
      // console.debug('Data:', error.response.data);
    } else {
      // Something else happened while setting up the request
      // triggered the error
      // console.debug('Error Message:', error.message);
    }

    return Promise.reject(error.response ? error.response.data : error);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;
