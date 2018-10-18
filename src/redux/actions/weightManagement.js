import * as Types from '../types/TimeManagement';

const initialState = {
    data: [],
    isLoading: false
};

const weightManagement = (state = initialState, action) => {
    switch (action.type) {
        case Types.WEIGHT_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.WEIGHT_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.value
            }
        case Types.WEIGHT_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}

export default weightManagement;