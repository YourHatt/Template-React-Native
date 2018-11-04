import { NavigationActions, StackActions } from 'react-navigation';

const initialState = {
    data: {},
    edit: false,
    formType: '',
    isLoading: false
};

export const FORMINPUT_LOADING_STARTED = 'FORMINPUT_LOADING_STARTED';
export const FORMINPUT_LOADING_SUCCESS = 'FORMINPUT_LOADING_SUCCESS';
export const FORMINPUT_LOADING_FAILURE = 'FORMINPUT_LOADING_FAILURE';

export const FORM_SCREEN = 'FORM_SCREEN';

const formInput = (state = initialState, action) => {
    switch (action.type) {
        case FORMINPUT_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case FORMINPUT_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                summary: action.value,
            }
        case FORMINPUT_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        case FORM_SCREEN:
            return {
                ...state,
                formType: action.formType,
                data: action.data,
                edit: action.edit
            }
        default:
            return state;
    }
}

export function backPress() {
    return { type: 'BACK_PRESS' };
}
export function replace(routeName) {
    return StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName })]
    });
}



export default formInput;