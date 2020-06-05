import AsyncStorage from '@react-native-community/async-storage';
import DeviceInfo from 'react-native-device-info';
import axios from 'axios';
import Base64 from './Base64';

const authBasic = {
  username: 'appNL',
  password: 'appNL@2020',
};

const basicToken = Base64.btoa(authBasic.username + ':' + authBasic.password);

export const getFormDataHeader = async () => {
  const token = await AsyncStorage.getItem('token');
  const language = (await AsyncStorage.getItem('language')) || 'en';
  return {
    'Content-Type': 'multipart/form-data; charset=UTF-8',
    Authorization: 'Bearer ' + token,
    'device-token': DeviceInfo.getBrand() + '-' + DeviceInfo.getUniqueId(),
    lang: language,
  };
};

export const getHeaderWithAuth = async () => {
  const language = (await AsyncStorage.getItem('language')) || 'en';
  return {
    'Content-Type': 'application/json; charset=UTF-8',
    Authorization: 'Basic ' + basicToken,
    'device-token': DeviceInfo.getBrand() + '-' + DeviceInfo.getUniqueId(),
    lang: language,
  };
};

const _callAuthBasicApi = async (method, url, input) => {
  const config = {
    headers: await getHeaderWithAuth(),
    url: url,
    method: method,
    data: input,
  };
  console.log('config api = ', config);
  const result = await axios(config);
  if (!result) {
    return {
      code: -1,
      message: 'undefined error happened, please try again later!',
    };
  }
  console.log('response = ', JSON.stringify(result));
  return result;
};

export const postAuthApi = async (url, input) => {
  return await _callAuthBasicApi('post', url, input);
};

