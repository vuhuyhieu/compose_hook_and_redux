import {DECREMENT_ACTION, INCREMENT_ACTION} from '../actions/ActionsType';

export const homeReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_ACTION:
      return state + action.value;
    case DECREMENT_ACTION:
      return state - action.value;
    default:
      return state;
  }
};
