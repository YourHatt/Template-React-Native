import * as Types from '../types/Member';
import {
    ToastAndroid,
    AsyncStorage
} from 'react-native';
import myArray from '../../config/TestArray'

const initialState = {
    summary: {},
    dataKey: '',
    members: [],
    name: '',
    address: '',
    tel: '',
    numberOfShares: '',
    role: '',
    isLoading: false,
    members: [],
    testName: 'Name'
};

const member = (state = initialState, action) => {
    switch (action.type) {
        case Types.MEMBER_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.MEMBER_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                members: action.value
            }
        case Types.MEMBER_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.MEMBER_GET_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.MEMBER_GET_SUCCESS:
            return {
                ...state,
                isLoading: false,
                members: action.value
            }
        default:
            return state;
    }
}
export function getList() {
    return async (dispatch, getState) => {
        await dispatch({ type: Types.MEMBER_GET_STARTED })
        const result = myArray.array_member
        return await dispatch({ type: Types.MEMBER_GET_SUCCESS, value: result })
    }
}

export default member;