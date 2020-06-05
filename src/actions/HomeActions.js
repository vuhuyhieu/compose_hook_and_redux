import {INCREMENT_ACTION, DECREMENT_ACTION} from './ActionsType';

export function increment() {
  return {type: INCREMENT_ACTION, value: 1};
}

export function decrement() {
  return {type: DECREMENT_ACTION, value: 1};
}
