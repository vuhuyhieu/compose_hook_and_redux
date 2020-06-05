import {createStore, applyMiddleware} from 'redux';
import rootReducer from './src/reducer/index';
import thunk from 'redux-thunk';
import saga from 'redux-saga';

export default function createRootStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
