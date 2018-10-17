import * as Types from '../types/TimeManagement';

const initialState = {
    data: [],
    isLoading: false
};

const timeManagement = (state = initialState, action) => {
    switch (action.type) {
        case Types.TIME_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.TIME_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.value
            }
        case Types.TIME_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}

export default timeManagement;