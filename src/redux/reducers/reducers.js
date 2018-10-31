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
    expense,
    goodReceive,
    goodTransfer,
    recordScrab
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
    expense,
    goodReceive,
    goodTransfer,
    recordScrab

});

export default AppReducer;