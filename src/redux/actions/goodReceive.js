import * as Types from '../types/Inventory';
// import Model from '../../model/Model'
import myArray from '../../config/TestArray'
import {
    ToastAndroid,
    AsyncStorage
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

const initialState = {
    title: '',
    product: '',
    location: '',
    reference: '',
    unitOfMeasure: '',
    qty: '',
    unitCost: '',
    supplier: '',
    lotNumber: '',
    isLoading: false,
    goodReceives: []
};



const goodReceive = (state = initialState, action) => {
    switch (action.type) {
        case Types.GOODRECEIVE_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.GOODRECEIVE_CREATE_STARTED:
            return {
                ...state,
                isLoading: true,
            }
        case Types.GOODRECEIVE_GET_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.GOODRECEIVE_LIST_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.GOODRECEIVE_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                summary: action.value
            }
        case Types.GOODRECEIVE_CREATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                title: initialState.title,
                product: initialState.product,
                location: initialState.location,
                reference: initialState.reference,
                unitOfMeasure: initialState.unitOfMeasure,
                qty: initialState.qty,
                unitCost: initialState.unitCost,
                supplier: initialState.supplier,
                lotNumber: initialState.lotNumber,
                goodReceives: [...state.goodReceives, action.data]
            }
        case Types.GOODRECEIVE_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                goodReceives: action.value
            }
        case Types.GOODRECEIVE_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.GOODRECEIVE_CREATE_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.GOODRECEIVE_GET_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.GOODRECEIVE_INPUT_CHANGE:
            return {
                ...state,
                title: action.title, //title to show product label
                product: action.product,
                location: action.location,
                reference: action.reference,
                unitOfMeasure: action.unitOfMeasure,
                qty: action.qty,
                unitCost: action.unitCost,
                supplier: action.supplier,
                lotNumber: action.lotNumber,
            }
        default:
            return state;
    }
}
export function getList() {
    return async (dispatch, getState) => {
        await dispatch({ type: Types.GOODRECEIVE_GET_STARTED })
        const result = myArray.array_GR
        console.log(result);
        return await dispatch({ type: Types.GOODRECEIVE_GET_SUCCESS, value: result })
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
            type: Types.GOODRECEIVE_INPUT_CHANGE,
            product: data.product, location: data.location, reference: data.reference, unitPrice: data.unitPrice, unitOfMeasure: data.unitOfMeasure, qty: data.qty, unitCost: data.unitCost, supplier: data.supplier, lotNumber: data.lotNumber
        });
        await dispatch(onCreateGoodReceive());
    }
}
export function onCreateGoodReceive() {
    return async (dispatch, getState) => {
        await dispatch({ type: Types.GOODRECEIVE_CREATE_STARTED });
        const { goodReceive } = getState();
        if (goodReceive) {
            await dispatch({ type: Types.GOODRECEIVE_CREATE_SUCCESS, data: goodReceive });
            // getList();
            ToastAndroid.show('เพิ่มรายการสำเร็จ', ToastAndroid.SHORT);
            await dispatch({ type: 'GOODRECEIVE_SCREEN' });
        } else {
            ToastAndroid.show('บางอย่างผิดพลาด', ToastAndroid.LONG);
            return await dispatch({ type: Types.GOODRECEIVE_CREATE_FAILURE })
        }
    }
}

export default goodReceive;