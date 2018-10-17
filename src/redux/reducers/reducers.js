import { combineReducers } from 'redux';

import {
    nav,
    home,
    login,
    signUp,
    inventory,
    saleReceiving,
    recordExpense
} from '../actions';

const AppReducer = combineReducers({
    nav,
    home,
    login,
    signUp,
    inventory,
    saleReceiving,
    recordExpense
});

export default AppReducer;