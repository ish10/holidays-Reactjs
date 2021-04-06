import { combineReducers } from 'redux';
import authReducer from './authReducer';
import Tours from  './Tours';
export default combineReducers({
auth:authReducer,
tour:Tours
});