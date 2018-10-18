import { combineReducers } from 'redux';

import {
    nav,
    home,
    login,
    signUp,
    inventory,
    saleReceiving,
    recordExpense,
    weightManagement,
    timeManagement,
    sharing,
    report,
} from '../actions';

const AppReducer = combineReducers({
    nav,
    home,
    login,
    signUp,
    inventory,
    saleReceiving,
    recordExpense,
    weightManagement,
    timeManagement,
    sharing,
    report,

});

export default AppReducer;