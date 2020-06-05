import {
  CONTROL_LOADING_ACTION,
  CONTROL_MESSAGE_DIALOG_ACTION,
} from '../actions/ActionsType';

export const commonReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTROL_LOADING_ACTION:
      return Object.assign(state, {isLoading: action.value});
    case CONTROL_MESSAGE_DIALOG_ACTION:
      return Object.assign(state, {messageObject: action.value});
    default:
      return state;
  }
};
