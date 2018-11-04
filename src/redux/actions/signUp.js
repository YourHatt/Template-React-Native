import * as Types from '../types/SignUp';
import { NavigationActions, StackActions } from 'react-navigation';

const initialState = {
    data: [],
    email: '',
    name: '',
    password: '',
    retypePassword: '',
    tel: '',
    address: '',
    inputError: false,
    isSame: false,
    inputSuccess: false,
    isLoading: false
};

const signUp = (state = initialState, action) => {
    switch (action.type) {
        case Types.SIGNUP_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.SIGNUP_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.value
            }
        case Types.SIGNUP_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.EMAIL_CHANGE:
            return {
                ...state,
                isLoading: false,
                email: action.data

            }
        case Types.NAME_CHANGE:
            return {
                ...state,
                isLoading: false,
                name: action.data
            }
        case Types.PASSWORD_CHANGE:
            return {
                ...state,
                isLoading: false,
                password: action.data
            }
        case Types.RETYPE_PASSWORD_CHANGE:
            return {
                ...state,
                isLoading: false,
                retypePassword: action.data
            }
        case Types.TEL_CHANGE:
            return {
                ...state,
                isLoading: false,
                tel: action.data
            }
        case Types.ADDRESS_CHANGE:
            return {
                ...state,
                isLoading: false,
                address: action.data
            }
        case Types.RETYPE_PASSWORD_CHECK:
            return {
                ...state,
                isLoading: false,
                isSame: action.isSame
            }
        case Types.RETYPE_PASSWORD_FAIL:
            return {
                ...state,
                isLoading: false,
                isSame: action.isSame
            }
        default:
            return state;
    }
}
export function replace(routeName) {
    return StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName })]
    });
}

export const onClickSubmit = () => {
    return async dispatch => {
        await dispatch(replace('Login'));
    }
}

export function emailChange(data) {
    return async dispatch => {
        await dispatch({
            type: Types.EMAIL_CHANGE,
            data: data
        });
    }
}

export function nameChange(data) {
    return async dispatch => {
        await dispatch({
            type: Types.NAME_CHANGE,
            data: data
        });
    }
}

export function passwordChange(data) {
    return async dispatch => {
        await dispatch({
            type: Types.PASSWORD_CHANGE,
            data: data
        });
        // await dispatch(retypePasswordCheck());

    }
}

export function retypePasswordChange(data) {
    return async dispatch => {
        await dispatch({
            type: Types.RETYPE_PASSWORD_CHANGE,
            data: data
        });
        await dispatch(retypePasswordCheck());
    }
}

export function retypePasswordCheck() {
    return async (dispatch, getState) => {
        const { signUp: { password, retypePassword } } = getState();
        console.log('password ', password)
        console.log('retype ', retypePassword)
        if (password === retypePassword) {
            await dispatch({
                type: Types.RETYPE_PASSWORD_CHECK,
                isSame: true,
            });
        }
        else if (password !== retypePassword) {
            await dispatch({
                type: Types.RETYPE_PASSWORD_CHECK,
                isSame: false,
            });
        }
        else {
            await dispatch({
                type: Types.RETYPE_PASSWORD_CHECK,
                isSame: false,
            });
        }
    }
}

export function telChange(data) {
    return async dispatch => {
        await dispatch({
            type: Types.TEL_CHANGE,
            data: data
        });
    }
}

export function addressChange(data) {
    return async dispatch => {
        await dispatch({
            type: Types.ADDRESS_CHANGE,
            data: data
        });
    }
}


export default signUp;