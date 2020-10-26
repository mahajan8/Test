import { combineReducers } from 'redux';

import * as homeReducer from './homeReducer'

export default combineReducers(Object.assign(
    homeReducer
));