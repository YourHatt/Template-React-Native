import { combineReducers } from 'redux';

import {
    nav,
    home,
    login,
    product,
    showProduct,
    cart,
    checkout
} from '../actions';

const AppReducer = combineReducers({
    nav,
    home,
    login,
    product,
    showProduct,
    cart,
    checkout
});

export default AppReducer;