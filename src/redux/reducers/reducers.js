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
    plantation,
    masterData,
    product,
    formInput,
    member,
    unitOfMeasure,
    location,
    expense
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
    plantation,
    masterData,
    product,
    formInput,
    member,
    unitOfMeasure,
    location,
    expense

});

export default AppReducer;