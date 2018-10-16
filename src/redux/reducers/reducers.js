import { combineReducers } from 'redux';

import {
    nav,
    home,
    login
} from '../actions';

const AppReducer = combineReducers({
    nav,
    home,
    login
});

export default AppReducer;