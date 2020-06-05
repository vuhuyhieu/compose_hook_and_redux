import {combineReducers} from 'redux';
import {homeReducer} from './HomeReducer';
import {authReducer} from './AuthReducer';
import {commonReducer} from './CommonReducer';

const appReducer = combineReducers({homeReducer, authReducer, commonReducer});

export default (state, action) => {
  return appReducer(state, action);
};
