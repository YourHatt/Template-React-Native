import * as Types from '../types/Inventory';
// import Model from '../../model/Model'
import myArray from '../../config/TestArray'
import {
    ToastAndroid,
    AsyncStorage
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

const initialState = {
    product: '',
    lotNumber: '',
    unitOfMeasure: '',
    fromLocation: '',
    toLocation: '',
    qty: '',
    isLoading: false,
    goodTransfers: []
};



const goodTransfer = (state = initialState, action) => {
    switch (action.type) {
        case Types.GOODTRANSFER_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.GOODTRANSFER_CREATE_STARTED:
            return {
                ...state,
                isLoading: true,
            }
        case Types.GOODTRANSFER_GET_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.GOODTRANSFER_LIST_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.GOODTRANSFER_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                summary: action.value
            }
        case Types.GOODTRANSFER_CREATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                product: initialState.product,
                lotNumber: initialState.lotNumber,
                unitOfMeasure: initialState.unitOfMeasure,
                fromLocation: initialState.fromLocation,
                toLocation: initialState.toLocation,
                qty: initialState.qty,
                goodTransfers: [...state.goodTransfers, action.data]
            }
        case Types.GOODTRANSFER_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                goodTransfers: action.value
            }
        case Types.GOODTRANSFER_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.GOODTRANSFER_CREATE_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.GOODTRANSFER_GET_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.GOODTRANSFER_INPUT_CHANGE:
            return {
                ...state,
                product: action.product,
                lotNumber: action.lotNumber,
                unitOfMeasure: action.unitOfMeasure,
                fromLocation: action.fromLocation,
                toLocation: action.toLocation,
                qty: action.qty,
            }
        default:
            return state;
    }
}
export function getList() {
    return async (dispatch, getState) => {
        await dispatch({ type: Types.GOODTRANSFER_GET_STARTED })
        const result = myArray.array_GT
        console.log(result);
        return await dispatch({ type: Types.GOODTRANSFER_GET_SUCCESS, value: result })
    }
}
export function replace(routeName) {
    return StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName })]
    });
}

export function onCreateSubmit(data) {
    return async dispatch => {
        await dispatch({
            type: Types.GOODTRANSFER_INPUT_CHANGE,
            product: data.product, lotNumber: data.lotNumber, unitOfMeasure: data.unitOfMeasure, fromLocation: data.fromLocation, toLocation: data.toLocation, qty: data.qty, qty: data.qty
        });
        await dispatch(onCreateGoodTransfer());
    }
}
export function onCreateGoodTransfer() {
    return async (dispatch, getState) => {
        await dispatch({ type: Types.GOODTRANSFER_CREATE_STARTED });
        const { goodTransfer } = getState();
        if (goodTransfer) {
            await dispatch({ type: Types.GOODTRANSFER_CREATE_SUCCESS, data: goodTransfer });
            // getList();
            ToastAndroid.show('เพิ่มรายการสำเร็จ', ToastAndroid.SHORT);
            await dispatch({ type: 'GOODTRANSFER_SCREEN' });
        } else {
            ToastAndroid.show('บางอย่างผิดพลาด', ToastAndroid.LONG);
            return await dispatch({ type: Types.GOODTRANSFER_CREATE_FAILURE })
        }
    }
}

export default goodTransfer;