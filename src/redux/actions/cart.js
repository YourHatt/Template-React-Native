import * as Types from '../types/Cart';
import {
    ToastAndroid,
} from 'react-native';
const initialState = {
    amount: [],
    carts: [],
    productValue: '',
    totalAmount: 0,
    totalPrice: 0,
    isLoading: false
};
//CART
const cart = (state = initialState, action) => {
    switch (action.type) {
        case Types.CART_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.CART_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
            }
        case Types.CART_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.CART_ADD_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.CART_ADD_SUCCESS:
            return {
                ...state,
                carts: [...state.carts, action.data],
                amount: [...state.amount, action.amount],
                totalAmount: state.totalAmount + parseInt(action.amount),
                totalPrice: state.totalPrice + action.price,
                isLoading: false
            }
        case Types.CART_ADD_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.CART_DELETE_SUCCESS:
            return {
                ...state,
                carts: action.data,
                isLoading: false
            }
        default:
            return state;
    }
}
export function onClickCart() {
    return async (dispatch) => {
        await dispatch({ type: Types.CART_SCREEN });
    }
}
export function onAddCart(data, amount) {
    return async (dispatch, getState) => {
        const total = cart.totalPrice
        console.log(total);
        await dispatch({ type: Types.CART_ADD_STARTED });
        if (data) {
            await dispatch({ type: Types.CART_ADD_SUCCESS, data: data, amount: amount, price: parseInt(data.unitPrice) * amount });
            ToastAndroid.show('เพิ่มรายการลงในตะกร้าแล้ว', ToastAndroid.SHORT);
        }
        else {
            ToastAndroid.show('บางอย่างผิดพลาด', ToastAndroid.LONG);
            return await dispatch({ type: Types.CART_ADD_FAILURE })
        }
    }
}
export function replace(routeName) {
    return StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName })]
    });
}
export default cart;