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
    location: '',
    qty: '',
    isLoading: false,
    recordScrabs: []
};



const recordScrab = (state = initialState, action) => {
    switch (action.type) {
        case Types.RECORDSCRAB_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.RECORDSCRAB_CREATE_STARTED:
            return {
                ...state,
                isLoading: true,
            }
        case Types.RECORDSCRAB_GET_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.RECORDSCRAB_LIST_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.RECORDSCRAB_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                summary: action.value
            }
        case Types.RECORDSCRAB_CREATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                product: initialState.product,
                lotNumber: initialState.lotNumber,
                unitOfMeasure: initialState.unitOfMeasure,
                location: initialState.location,
                qty: initialState.qty,
                recordScrabs: [...state.recordScrabs, action.data]
            }
        case Types.RECORDSCRAB_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                recordScrabs: action.value
            }
        case Types.RECORDSCRAB_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.RECORDSCRAB_CREATE_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.RECORDSCRAB_GET_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.RECORDSCRAB_INPUT_CHANGE:
            return {
                ...state,
                product: action.product,
                lotNumber: action.lotNumber,
                unitOfMeasure: action.unitOfMeasure,
                location: action.fromLocation,
                qty: action.qty,
            }
        default:
            return state;
    }
}
export function getList() {
    return async (dispatch, getState) => {
        await dispatch({ type: Types.RECORDSCRAB_GET_STARTED })
        const result = myArray.array_RS
        console.log(result);
        return await dispatch({ type: Types.RECORDSCRAB_GET_SUCCESS, value: result })
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
            type: Types.RECORDSCRAB_INPUT_CHANGE,
            product: data.product, lotNumber: data.lotNumber, unitOfMeasure: data.unitOfMeasure, location: data.location,  qty: data.qty,
        });
        await dispatch(onCreateRecordScrab());
    }
}
export function onCreateRecordScrab() {
    return async (dispatch, getState) => {
        await dispatch({ type: Types.RECORDSCRAB_CREATE_STARTED });
        const { recordScrab } = getState();
        if (recordScrab) {
            await dispatch({ type: Types.RECORDSCRAB_CREATE_SUCCESS, data: recordScrab });
            // getList();
            ToastAndroid.show('เพิ่มรายการสำเร็จ', ToastAndroid.SHORT);
            await dispatch({ type: 'RECORDSCRAB_SCREEN' });
        } else {
            ToastAndroid.show('บางอย่างผิดพลาด', ToastAndroid.LONG);
            return await dispatch({ type: Types.RECORDSCRAB_CREATE_FAILURE })
        }
    }
}

export default recordScrab;