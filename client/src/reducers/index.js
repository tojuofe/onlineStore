import { combineReducers } from 'redux';
import pdfReducer from './pdfReducer';

export default combineReducers({
  pdf: pdfReducer
});
