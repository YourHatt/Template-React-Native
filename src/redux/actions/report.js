import * as Types from '../types/Report';

const initialState = {
    data: [],
    isLoading: false
};

const report = (state = initialState, action) => {
    switch (action.type) {
        case Types.REPORT_LOADING_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case Types.REPORT_LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.value
            }
        case Types.REPORT_LOADING_FAILURE:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }
}

export default report;