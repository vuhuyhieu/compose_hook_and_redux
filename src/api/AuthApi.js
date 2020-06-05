import {postAuthApi} from './CommonApi';
import {LOGIN_URL} from './Url';
import {detectEmailAndPhoneNumber} from '../actions/Validate';

export const loginApi = async input => {
  const emailOrPhone = detectEmailAndPhoneNumber(input.username);
  let data;
  if (emailOrPhone === 'email') {
    data = {
      email: input.username,
      password: input.password,
    };
  } else {
    data = {
      mobile: input.username,
      password: input.password,
    };
  }
  return await postAuthApi(LOGIN_URL, data);
};
