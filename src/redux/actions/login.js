import * as Types from '../types/Login';
import { NavigationActions, StackActions } from 'react-navigation';
import {
    ToastAndroid,
    AsyncStorage
} from 'react-native';

const initialState = {
    email: 'grgr@gmail.com',
    passwordConfirmed: false,
    retypePassword: '',
    password: '111111',
    pinValue: '',
    name: '',
    tel: '',
    share: '0',
    isLoading: false,
    user: {}
};

import model from '../../class/ServicesAPI';
import notification from '../../Notification';

const login = (state = initialState, action) => {
    switch (action.type) {
        case Types.LOGIN_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.LOGIN_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.value
            }
        case Types.LOGIN_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case Types.PIN_SIGNUP_CHANGE:
            return {
                ...state,
                pinValue: action.value
            }
        case Types.NAME_SIGNUP_CHANGE:
            return {
                ...state,
                name: action.value
            }
        case Types.TEL_SIGNUP_CHANGE:
            return {
                ...state,
                tel: action.value
            }
        case Types.PIN_SIGNUP_CHANGE:
            return {
                ...state,
                pinValue: action.value
            }
        case Types.EMAIL_CHANGE:
            return {
                ...state,
                email: action.value
            }
        case Types.PASSWORD_CHANGE:
            return {
                ...state,
                password: action.value
            }
        case Types.RETYPE_PASSWORD_CHANGE:
            return {
                ...state,
                retypePassword: action.value
            }
        case Types.RETYPE_PASSWORD_CHECK:
            return {
                ...state,
                passwordConfirmed: action.value
            }
        case Types.RETYPE_PASSWORD_SUCCESS:
            return {
                ...state,
                passwordConfirmed: action.value
            }
        case Types.RETYPE_PASSWORD_FAIL:
            return {
                ...state,
                passwordConfirmed: action.value
            }
        case Types.PIN_CHANGE:
            return {
                ...state,
                pinValue: state.pinValue.length !== 6 ? state.pinValue + action.value : state.pinValue
            }
        case Types.REMOVE_PIN:
            return {
                ...state,
                pinValue: state.pinValue.length ? state.pinValue.slice(0, -1) : ''
            }
        case Types.CLEAR_PIN:
            return {
                ...state,
                pinValue: initialState.pinValue
            }
        case Types.SIGNUP_LOAD_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.SIGNUP_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.value,
                pinValue: initialState.pinValue,
                email: initialState.email,
                password: initialState.password,
                retypePassword: initialState.retypePassword
            }
        case Types.SIGNUP_LOAD_FAILURE:
            return {
                ...state,
                isLoading: false,
                pinValue: initialState.pinValue
            }
        case Types.AUTH_LOAD_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.AUTH_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                email: initialState.email,
                password: initialState.pinValue,
                user: action.value,
                pinValue: initialState.pinValue
            }
        case Types.AUTH_LOAD_FAILURE:
            return {
                ...state,
                isLoading: false,
                pinValue: initialState.pinValue
            }
        case Types.AUTH_LOG_OUT:
            return {
                ...state,
                pinValue: initialState.pinValue,
                user: initialState.user
            }
        default:
            return state;
    }
}
export function emailChange(emailValue) {
    return async dispatch => {
        await dispatch({ type: Types.EMAIL_CHANGE, value: emailValue });
    }
}
export function passwordChange(passwordValue) {
    console.log(passwordValue)
    return async dispatch => {
        await dispatch({ type: Types.PASSWORD_CHANGE, value: passwordValue });
    }
}
export function replace(routeName) {
    return StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName })]
    });
}
export const onClickSignUp = () => {
    return async dispatch => {
        await dispatch(replace('SignUp'));
    }
}
export const onClickLogin = () => {
    return async dispatch => {
        await dispatch(replace('Login'));
    }
}
export const onSignOut = () => {
    return async dispatch => {
        await AsyncStorage.clear();
        await dispatch({ type: Types.AUTH_LOG_OUT });
        await dispatch(replace('Login'));
        ToastAndroid.show('ลงชื่อออกจากระบบสำเร็จ', ToastAndroid.SHORT);
    }
}
export function onAuthen(data) {
    return async (dispatch, getState) => {
        try {
            await model.storage.removeStorage();
            const response = await model.users.authentication(data);
            await model.storage.saveToken(response.token);
            await model.storage.saveCurrentUser(response.user);
            notification.success('ลงชื่อเข้าสู่จากระบบสำเร็จ');
            if(await model.storage.isToken()) {
                await dispatch(replace('Home'));
            }
            
        } catch (error) {
            console.log(error);
            notification.error(error);
        }
        
    }
}

export default login;