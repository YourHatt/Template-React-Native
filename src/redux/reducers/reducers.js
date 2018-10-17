import { combineReducers } from 'redux';

import {
    nav,
    home,
    login,
    signUp
} from '../actions';

const AppReducer = combineReducers({
    nav,
    home,
    login,
    signUp
});

export default AppReducer;