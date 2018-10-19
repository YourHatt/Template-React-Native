import * as Types from '../types/Plantation';

const initialState = {
    data: [],
    isLoading: false
};

const plantation = (state = initialState, action) => {
    switch (action.type) {
        case Types.PLANTATION_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.PLANTATION_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.value
            }
        case Types.PLANTATION_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}

export default plantation;