import * as Types from '../types/MasterData';
// import Model from '../../model/Model'
import myArray from '../../config/TestArray'
import {
    ToastAndroid,
    AsyncStorage
} from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';

const initialState = {
    summary: {},
    dataKey: '',
    status: '',
    title: '',
    unitCost: '',
    unitOfMeasure: '',
    unitPrice: '',
    vatPrice: '',
    isLoading: false,
    products: []
};



const product = (state = initialState, action) => {
    switch (action.type) {
        case Types.PRODUCT_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.PRODUCT_CREATE_STARTED:
            return {
                ...state,
                isLoading: true,
            }
        case Types.PRODUCT_GET_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.PRODUCT_LIST_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.PRODUCT_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                summary: action.value
            }
        case Types.PRODUCT_CREATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                title: initialState.title,
                status: initialState.status,
                unitCost: initialState.unitCost,
                unitOfMeasure: initialState.unitOfMeasure,
                unitPrice: initialState.unitPrice,
                vatPrice: initialState.vatPrice,
                products: [...state.products, action.data]
            }
        case Types.PRODUCT_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: action.value
            }
        case Types.PRODUCT_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.PRODUCT_CREATE_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.PRODUCT_GET_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.PRODUCT_INPUT_CHANGE:
            return {
                ...state,
                title: action.title,
                status: action.status,
                unitCost: action.unitCost,
                unitOfMeasure: action.unitOfMeasure,
                unitPrice: action.unitPrice,
                vatPrice: action.vatPrice,
            }
        default:
            return state;
    }
}
export function getList() {
    return async (dispatch, getState) => {
        await dispatch({ type: Types.PRODUCT_GET_STARTED })
        const result = myArray.array_A
        return await dispatch({ type: Types.PRODUCT_GET_SUCCESS, value: result })
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
        await dispatch({ type: Types.PRODUCT_INPUT_CHANGE, title: data.title, status: data.status, unitCost: data.unitCost, unitPrice: data.unitPrice, unitOfMeasure: data.unitOfMeasure, vatPrice: data.vatPrice, });
        await dispatch(onCreateProduct());
    }
}
export function onCreateProduct() {
    return async (dispatch, getState) => {
        await dispatch({ type: Types.PRODUCT_CREATE_STARTED });
        const { product } = getState();
        if (product) {
            await dispatch({ type: Types.PRODUCT_CREATE_SUCCESS, data: product });
            // getList();
            ToastAndroid.show('เพิ่มรายการสำเร็จ', ToastAndroid.SHORT);
            await dispatch({ type: 'PRODUCT_SCREEN' });
        } else {
            ToastAndroid.show('บางอย่างผิดพลาด', ToastAndroid.LONG);
            return await dispatch({ type: Types.PRODUCT_CREATE_FAILURE })
        }
    }
}

export default product;