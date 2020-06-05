import {
  LOGIN_ACTION,
  VALIDATE_PASSWORD_ACTION,
  VALIDATE_USERNAME_ACTION,
} from './ActionsType';

export function login(data) {
  console.log('get in auth action');
  return {type: LOGIN_ACTION, value: data};
}

export function validateUsername(username) {
  return {type: VALIDATE_PASSWORD_ACTION, value: username};
}

export function validatePassword(password) {
  return {type: VALIDATE_PASSWORD_ACTION, value: password};
}
