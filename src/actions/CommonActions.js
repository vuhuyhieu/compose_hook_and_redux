import {
  CONTROL_LOADING_ACTION,
  CONTROL_MESSAGE_DIALOG_ACTION,
} from './ActionsType';

export const controlLoading = value => {
  return {type: CONTROL_LOADING_ACTION, value};
};

export const controlMessageDialog = value => {
  return {type: CONTROL_MESSAGE_DIALOG_ACTION, value};
};
