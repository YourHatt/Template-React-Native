import * as Types from '../types/Login';
import { NavigationActions, StackActions } from 'react-navigation';

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
        await dispatch(replace('Home'));
    }
}
export function onAuthen() {
    return async (dispatch, getState) => {

        const { login: { email, password } } = getState();
        // if (email == 'grgr@gmail.com' && password == '111111') {
        //     await dispatch({ type: Types.AUTH_LOAD_SUCCESS });
        //     ToastAndroid.show('เข้าสู่ระบบสำเร็จ', ToastAndroid.SHORT);
        await dispatch(replace('Home'))
        // }
    }
}

export default login;