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
    description: '',
    id: '',
    title: '',
    locations: []
};



const location = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOCATION_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.LOCATION_CREATE_STARTED:
            return {
                ...state,
                isLoading: true,
            }
        case Types.LOCATION_GET_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.LOCATION_LIST_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.LOCATION_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                summary: action.value
            }
        case Types.LOCATION_CREATE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                id: initialState.id,
                description: initialState.description,
                title: initialState.description,
                locations: [...state.locations, action.data]
            }
        case Types.LOCATION_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                locations: action.value
            }
        case Types.LOCATION_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.LOCATION_CREATE_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.LOCATION_GET_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.LOCATION_INPUT_CHANGE:
            return {
                ...state,
                title: action.id,
                id: action.id,
                description: action.description,

            }
        default:
            return state;
    }
}
export function getList() {
    return async (dispatch, getState) => {
        await dispatch({ type: Types.LOCATION_GET_STARTED })
        const result = myArray.array_UOM
        return await dispatch({ type: Types.LOCATION_GET_SUCCESS, value: result })
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
        await dispatch({ type: Types.LOCATION_INPUT_CHANGE, id: data.id, description: data.description });
        await dispatch(onCreateProduct());
    }
}
export function onCreateProduct() {
    return async (dispatch, getState) => {
        await dispatch({ type: Types.LOCATION_CREATE_STARTED });
        const { location } = getState();
        if (location) {
            await dispatch({ type: Types.LOCATION_CREATE_SUCCESS, data: location });
            // getList();
            ToastAndroid.show('เพิ่มรายการสำเร็จ', ToastAndroid.SHORT);
            await dispatch({ type: 'LOCATION_SCREEN' });
        } else {
            ToastAndroid.show('บางอย่างผิดพลาด', ToastAndroid.LONG);
            return await dispatch({ type: Types.LOCATION_CREATE_FAILURE })
        }
    }
}

export default location;