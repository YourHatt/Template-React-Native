import * as Types from '../types/SignUp';
import { NavigationActions, StackActions } from 'react-navigation';

const initialState = {
    data: [],
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

export default signUp;